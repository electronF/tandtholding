'use client';

import {MouseEventHandler, PropsWithChildren } from "react";

import { capitalize } from "@/utils/text"
import Link from "@/types/link";

import './menutab.scss';

interface Props extends PropsWithChildren
{
    name: string
    link: string
    isActive: boolean
    onClick: MouseEventHandler<HTMLLIElement> | undefined
}

export default function MenuTab({name, link, onClick, isActive}:Props)
{
    return (
        <li className="menu-tab is-active" onClick={onClick}>
            <a href={link} className={(isActive)?'tab-is-active':''}>{capitalize(name)}</a>
        </li>
    )
}