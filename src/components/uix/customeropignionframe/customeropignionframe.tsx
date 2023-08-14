import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren
{
    imagePath:string
    content:string
    name:string
    role:string
}

export default function CustomerOpignionFrame({imagePath, content, name, role}:Props){
    return null
}
