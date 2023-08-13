import Image from "next/image"
import { PropsWithChildren } from "react"


interface Props extends PropsWithChildren
{
    name?: string
    alt?: string
    path: string
    link: string
    width: number
    height: number
}

export default function IconButton({name, alt, path, width, height, link}:Props) {
    return (
        <a href={link} className="icon-button">
            <Image
                src={path}
                title={name}
                alt={alt??''}
                width={width}
                height={height}
                priority
            />
        </a>
    )
}