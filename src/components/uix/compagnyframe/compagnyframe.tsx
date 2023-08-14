import IconButton from "@/components/uix/iconbutton/iconbutton";
import Link from "@/types/link";
import { PropsWithChildren } from "react";

import './compagnyframe.scss'


interface Props extends PropsWithChildren
{
    name: string
    logoPath: string
    content: string
    button?: Link,
    orientation?: 'vertical'|'horizontal'
}


export default function CompagnyFrame({name, logoPath, content, button, orientation}:Props){
    return (
        (orientation != undefined && orientation == 'vertical')?
            <div className="flex flex-col compagny-frame compagny-frame-aligment-vertical">
                <h3 className="frame-title">{name}</h3>
                <IconButton
                    name={name}
                    alt={name}
                    path={logoPath}
                    link={(button != undefined)?button.link:''}
                    width={200}
                    height={200} 
                />
                <p className="frame-content">{content}</p>
                {
                    (button != undefined)?<a href={button.link} className="frame-button">{button.name}</a>:null
                }
            </div>
            :<div className="flex flex-row compagny-frame compagny-frame-aligment-horizontal">
                <IconButton
                    name={name}
                    alt={name}
                    path={logoPath}
                    link={(button != undefined)?button.link:''}
                    width={200}
                    height={200} 
                />
                <div>
                    <h3 className="frame-title">{name}</h3>
                    <p className="frame-content">{content}</p>
                    {
                        (button != undefined)?<a href={button.link} className="frame-button">{button.name}</a>:null
                    }
                </div>
            </div>

    )
}