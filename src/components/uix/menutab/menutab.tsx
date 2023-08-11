import { Children, PropsWithChildren } from "react";

import { capitalize } from "@/utils/text"
import Link from "@/types/link";

import './menutab.scss';

interface Props extends PropsWithChildren
{
    name: string
    link: string
}

export default function MenuTab({name, link}:Props)
{
    return (
        <li className="menu-tab">
            <a href={link}>{capitalize(name)}</a>
        </li>
    )
}