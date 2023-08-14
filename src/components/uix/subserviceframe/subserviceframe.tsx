import Image from "next/image";
import { PropsWithChildren } from "react";

import './subserviceframe.scss'


interface Props extends PropsWithChildren
{
    imagePath?: string
    name: string
    content: string
}

export default function SubServiceFrame({imagePath, name, content}:Props)
{
    return(
        <div className="flex flex-row sub-service-frame">
            <Image
                src={imagePath??''}
                width={100}
                height={100}
                alt="name"
            />
            <div className="sub-service-frame-presentation">
                <span className="sub-service-frame-presentation-title">{name}</span>
                <p className="sub-service-frame-presentation-content">{content}</p>
            </div>
        </div>
    )
}