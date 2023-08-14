import { PropsWithChildren } from 'react'

import HorizontalContactBar from '@/components/uix/horizontalcontactbar/horizontalcontactbar'
import Banner from '@/modules/banner/banner'

import BannerInfo from '@/types/bannerinfo'
import ContactBarInfo from '@/types/contactbarinfo'
import MenuBarInfo from '@/types/menubarinfo'

import './headerbar.scss'

interface Props extends PropsWithChildren
{
    contactBarInfo: ContactBarInfo
    menuBarInfo: MenuBarInfo
    bannerInfo?: BannerInfo
    bannerShouldBeDisplayed: boolean
}


export default function HeaderBar({bannerInfo, contactBarInfo, menuBarInfo, bannerShouldBeDisplayed}:Props) {
    return (
    <header className='flex flex-col header-bar'>
        <HorizontalContactBar email={contactBarInfo.email} phone={contactBarInfo.phone} socialMedia={contactBarInfo.socialMedia}  />
        <Banner menuBarInfo={menuBarInfo} bannerInfo={bannerInfo} bannerShouldBeDisplayed={bannerShouldBeDisplayed} />
    </header>
    )
}