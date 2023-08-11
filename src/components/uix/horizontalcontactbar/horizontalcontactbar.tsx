import Image from 'next/image'

import IconButton from '@/types/iconbutton'

import './horizontalcontactbar.scss';


export default function HorizontalContactBar() {
    var menuItems:IconButton[] = [
        {
            'name': 'facebook',
            'alt': 'facebook',
            'path': '/assets/icons/facebook-icon.webp',
            'link': ''
        },
        {
            'name': 'whatsapp',
            'alt': 'whatsapp',
            'path': '/assets/icons/whatsapp-icon.webp',
            'link': ''
        },
        {
            'name': 'twitter',
            'alt': 'twitter',
            'path': '/assets/icons/twitter-icon.webp',
            'link': ''
        },
    ]
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
            <span>
                +237 XXX XXX XXX
            </span>
        </div>
        <div className='flex flex-row justify-center section'>
            <Image
                src="/assets/icons/open-envelope-icon.webp"
                alt=""
                width={48}
                height={48}
                priority
            />
            <span>
                {'contact@nomdedomaine.com'}
            </span>
        </div>
        <div className='flex flex-row section justify-end'>
            {
                menuItems.map((item)=>(
                    <Image
                        src={item.path}
                        alt={item.name??''}
                        key = {'contact-item-'+Math.random()}
                        //   className="dark:invert"
                        width={24}
                        height={24}
                        priority
                    />
                ))
            }
        </div>
    </div>
  )
}