import { PropsWithChildren } from "react";
import Image from "next/image";

import Link from "@/types/link";

import './brandingframe.scss'



interface Props extends PropsWithChildren
{
    name: string
    imagePath: string
    content: string
    link?: Link
}

export default function BrandingFrame({name, imagePath, content, link}:Props){
    return (
        <div className="flex flex-col branding-frame">
            <span className='frame-title'>{name}</span>
            <Image
                src={imagePath}
                width={96}
                height={96}
                alt={name}
                priority
                className="frame-image"
            />
            <p className="frame-content">
                {content}
            </p>
        </div>
    )
}