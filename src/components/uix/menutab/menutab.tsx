'use client';

import {MouseEventHandler, PropsWithChildren } from "react";

import { capitalize } from "@/utils/text"

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
        <li className="flex flex-col menu-tab" onClick={onClick}>
            <a href={link}>{capitalize(name)}</a>
            <span className={(isActive)?'tab-is-active':''}></span>
        </li>
    )
}