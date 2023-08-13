import { PropsWithChildren } from "react";

import Link from "@/types/link";

import './brandingaboutframe.scss'


interface Props extends PropsWithChildren
{
    titleLabel: string
    title:string
    content: string
    button: Link
}

export default function BrandingAboutFrame({titleLabel, title, content, button}:Props)
{
    return (
        <div className="flex flex-col branding-about-frame">
            <div className="frame-title">
                <span className="title-label">{titleLabel}:</span>
                {title}
            </div>
            <p className="frame-content">{content}</p>
            <a href={button.link} className="frame-button">{button.name}</a>
        </div>
    )
}