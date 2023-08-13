import { PropsWithChildren } from 'react'

import HorizontalMenuBar from '@/components/uix/horizontalmenubar/horizontalmenubar'

import MenuBarInfo from '@/types/menubarinfo'
import BannerInfo from '@/types/bannerinfo'

import './banner.scss'

interface Props extends PropsWithChildren
{
    menuBarInfo: MenuBarInfo
    bannerInfo?: BannerInfo
    bannerShouldBeDisplayed:boolean
}


export default function Banner({menuBarInfo, bannerInfo, bannerShouldBeDisplayed}:Props) {
    return (
    <section 
        className='flex flex-col justify-start banner' 
        style={{
            backgroundImage: (bannerShouldBeDisplayed==true)?`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${bannerInfo?.backgroundImagePath})`:'', 
            backgroundColor:bannerInfo?.backgroundColor,
            height:  (bannerShouldBeDisplayed==true)?`400px`:'auto'
            }}
    >
        <HorizontalMenuBar  logo={menuBarInfo.logo} tabs={menuBarInfo.tabs}/>
        {
            (bannerShouldBeDisplayed==true)?<div className='flex flex-col justify-between banner-info'>
                <h1 className='title'>{bannerInfo?.title}</h1>
                <p className='content'>{bannerInfo?.content}</p>
                <a href={bannerInfo?.button?.link} className='button'>{bannerInfo?.button?.name}</a>
            </div>:null
        }
    </section>
    )
}