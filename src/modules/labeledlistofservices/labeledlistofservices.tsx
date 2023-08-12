import { PropsWithChildren, ReactNode } from "react";

import { capitalizeAllWords } from "@/utils/text";

import './labeledlistofservices.scss'


interface Props extends PropsWithChildren
{
    name: String
    children: ReactNode
}


export default function LabeledListOfServices({name, children}:Props)
{
    return (
        <div className="flex flex-col justify-start labeled-list-of-services">
            <h3 className="title">{capitalizeAllWords(name)}</h3>
            {children}
        </div>
    )
}