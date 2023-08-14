import { PropsWithChildren, ReactNode } from "react";

import './imageframe.scss'


interface Props extends PropsWithChildren
{
    backgroundImagePath: string
    backgroundColor: string
    width?: string
    height?: string
    children?: ReactNode
}


export default function ImageFrame({backgroundImagePath, backgroundColor, children, width, height}:Props)
{
    return (
        <div 
            className="flex image-frame"
            style={{
                backgroundImage: `url(${backgroundImagePath})`, 
                backgroundColor: backgroundColor,
                height:  (height!=undefined)?height:'400px',
                width: (width!=undefined)?width:'100%'
            }}
        >
            {children}
        </div>
    )
}