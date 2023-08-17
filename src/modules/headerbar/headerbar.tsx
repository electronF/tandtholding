import { PropsWithChildren } from 'react'

import HorizontalContactBar from '@/components/uix/horizontalcontactbar/horizontalcontactbar'
import Banner from '@/modules/banner/banner'

import BannerInfo from '@/types/bannerinfo'
import ContactBarInfo from '@/types/contactbarinfo'
import MenuBarInfo from '@/types/menubarinfo'
import { default as IconButtonType } from "@/types/iconbutton";

import './headerbar.scss'

interface Props extends PropsWithChildren
{
    bannerInfo?: BannerInfo
    bannerShouldBeDisplayed: boolean
    currentPageRoot: string
}


export default function HeaderBar({bannerInfo, bannerShouldBeDisplayed, currentPageRoot}:Props) {
    var logo: IconButtonType = {
        name: "T and T Holding",
        alt: "logo",
        path: "/assets/logo/logo-square-no-bg.webp",
        link: "/",
      };
    
    var menuBarInfo: MenuBarInfo = {
        logo: logo,
        tabs: [
          {
            name: "acceuil",
            link: "/",
          },
          {
            name: "contact",
            link: "/contact",
          },
          {
            name: "qui sommes nous ?",
            link: "/qui-sommes-nous",
          },
          {
            name: "nos entreprises",
            link: "/nos-entreprises",
          },
          {
            name: "nous rejoindre",
            link: "/nous-rejoindre",
          },
          {
            name: "avis",
            link: "/avis",
          },
        ],
      };
    
      var socialMedia: IconButtonType[] = [
        {
          name: "facebook",
          alt: "facebook",
          path: "/assets/icons/facebook-icon.webp",
          link: "",
        },
        {
          name: "whatsapp",
          alt: "whatsapp",
          path: "/assets/icons/whatsapp-icon.webp",
          link: "",
        },
        {
          name: "twitter",
          alt: "twitter",
          path: "/assets/icons/twitter-icon.webp",
          link: "",
        },
      ];
    
      var contactBarInfo: ContactBarInfo = {
        phone: "+237 XXX XXX XXX",
        email: "contact@nomdedomaine.com",
        socialMedia: socialMedia,
      };

    return (
    <header className='flex flex-col header-bar'>
        <HorizontalContactBar email={contactBarInfo.email} phone={contactBarInfo.phone} socialMedia={contactBarInfo.socialMedia}  />
        <Banner menuBarInfo={menuBarInfo} currentPageRoot={currentPageRoot} bannerInfo={bannerInfo} bannerShouldBeDisplayed={bannerShouldBeDisplayed} />
    </header>
    )
}