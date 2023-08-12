import { PropsWithChildren } from 'react';
import Image from 'next/image'

import {default as IconButtonType} from '@/types/iconbutton'

import './horizontalcontactbar.scss';
import IconButton from '@/components/iconbutton/iconbutton';



interface Props extends PropsWithChildren
{
    phone:String
    email: String
    contacts: IconButtonType[]
}


export default function HorizontalContactBar({phone, email, contacts}:Props) {
    
  return (

    <div className='flex flex-row horizontal-contact-bar'>
        <div className='flex flex-row section'>
            <Image
                src="/assets/icons/phone-icon.webp"
                alt=""
                width={48}
                height={48}
                priority
            />
            <span>{phone}</span>
        </div>
        <div className='flex flex-row justify-center section'>
            <Image
                src="/assets/icons/open-envelope-icon.webp"
                alt=""
                width={48}
                height={48}
                priority
            />
            <a href={'mailto:'+email}>{email}</a>
        </div>
        <div className='flex flex-row section justify-end'>
            {
                contacts.map((item)=>(
                    <IconButton
                        name={item.name}
                        alt={item.alt}
                        path={item.path}
                        width={24}
                        height={24}
                        link={item.link}
                        key={"service-icon-button-" + Math.random()}
                    />
                ))
            }
        </div>
    </div>
  )
}