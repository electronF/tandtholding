'use client';

import { PropsWithChildren, useState } from 'react'
import Image from 'next/image'

import MenuTab from '@/components/uix/menutab/menutab'
import {default as IconButtonType} from "@/types/iconbutton"
import Link from "@/types/link"

import './horizontalmenubar.scss'


interface Props extends PropsWithChildren
{
    logo: IconButtonType
    tabs: Link[]
    currentPageRoot:string
}

interface CustomTab {
    key: string
    tab: Link
    state: boolean
}


export default function HorizontalMenuBar({logo, tabs, currentPageRoot}:Props) {
  function onClick(key:string, tabs:CustomTab[]){
    for(var tab of tabs){
        if(tab.key != key)
            tab.state = false
        else
            tab.state = true
    }
  }

    let customTabs:CustomTab[] = tabs.map((item)=>{
        return {'key':'menu-item-'+Math.random(), 'tab':item, 'state':false}
    })
    if(customTabs.length > 0){
        for(var customTab of customTabs)
        {
            if( customTab.tab.link==currentPageRoot)
                customTab.state = true
        }
    }

    return (
        <div className="flex flex-row horizontal-menu-bar">
            <a href={logo.link} title={logo.name??''}>
                <Image
                    src={logo.path}
                    alt={logo.alt??''}
                    className='logo'
                    width={400}
                    height={400}
                />
            </a>
            <ul className="flex flex-row justify-end menu-tabs">
                {
                    customTabs.map((item)=><MenuTab 
                        name={item.tab.name} 
                        link={item.tab.link} 
                        isActive = {item.state}
                        onClick={()=>onClick(item.key, customTabs)}
                        key={item.key}
                        />
                    )
                }
            </ul>
        </div>
    )
}