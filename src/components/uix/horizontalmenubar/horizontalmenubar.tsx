'use client';

import { MouseEvent, PropsWithChildren, useState } from 'react'
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

    var changeMenuBarVisibility = (event:MouseEvent) => {
        var menutabs = document.getElementById('horizontal-menu-bar-menu-tabs')
        var menuBar = document.getElementById('horizontal-menu-bar-menu-bar')
        
        try {
            var offsetTop = menuBar?.parentElement?.getBoundingClientRect().top    
        } catch (error) {
            var offsetTop = menuBar?.parentElement?.getBoundingClientRect().top
        }
        
        console.log(offsetTop)
        if(menuBar !== undefined && !menuBar?.classList.contains('phone-menu-bar'))
        {
            menuBar?.classList.add('phone-menu-bar')
            menuBar?.style.setProperty('padding-top', `${offsetTop}px !important`)
            if(menutabs !== undefined)
            {
                if(menutabs?.classList.contains('display-none'))
                {
                    menutabs.classList.remove('display-none')
                }
                menutabs?.classList.add('dispay-flex')
            }
            menutabs?.classList.add('display-flex')
            event.currentTarget.classList.add('close-menu-button')
        }
        else if(menuBar !== undefined)
        {
            menuBar?.classList.remove('phone-menu-bar')
            menuBar?.style.setProperty('top', '0px')
            if(menutabs !== undefined)
            {
                if(menutabs?.classList.contains('display-flex'))
                {
                    menutabs.classList.remove('display-flex')
                }
                menutabs?.classList.add('dispay-none')
            }
            event.currentTarget.classList.remove('close-menu-button')
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
            <div className="flex flex-row menu-bar" id='horizontal-menu-bar-menu-bar'>
                <button className="flex flex-col menu-button" onClick={(event)=>changeMenuBarVisibility(event)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="flex flex-row justify-end menu-tabs" id="horizontal-menu-bar-menu-tabs">
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
        </div>
    )
}