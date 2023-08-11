import { PropsWithChildren } from "react"

import IconButton from "@/components/iconbutton/iconbutton"
import {default as IconButtonType} from "@/types/iconbutton"
import Service from "@/types/service"

import './serviceframe.scss'


interface Props extends PropsWithChildren
{
    contacts: IconButtonType[]
    logo: IconButtonType
    services: Service[]
}


export default function ServiceFrame({contacts, logo, services}:Props) {
    return (
        <section className='flex flex-row justify-start service-frame'>
            <div className="flex flex-col contact-section">
                <IconButton 
                    name={logo.name} 
                    alt={logo.alt} 
                    path={logo.path} 
                    width={200} 
                    height={200} 
                    link={logo.link}
                />
                <div className="flex flex-row justify-center contacts">
                    {
                        contacts.map((menuItem) =>
                            <IconButton  
                                name={menuItem.name} 
                                alt={menuItem.alt} 
                                path={menuItem.path} 
                                width={32} 
                                height={32} 
                                link={menuItem.link}
                                key={'service-icon-button-'+Math.random()}
                            />
                        )
                    }
                </div>
            </div>
            <div className="flex flex-row">

            </div>
        </section>
    )
}