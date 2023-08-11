import Image from 'next/image'

import MenuTab from '@/components/uix/menutab/menutab'

import {default as MenuTabType} from "@/types/link"

import './horizontalmenubar.scss'

export default function HorizontalMenuBar() {
    var menuItems:MenuTabType[] = [
        {
            'name': 'acceuil',
            'link': '/'
        },
        {
            'name': 'contact',
            'link': '/contact'
        },
        {
            'name': 'qui sommes nous ?',
            'link': '/a-propos'
        },
        {
            'name': 'nos entreprises',
            'link': '/nos-entreprises'
        },
        {
            'name': 'avis',
            'link': '/avis'
        }
    ]
  return (
    <div className="flex flex-row horizontal-menu-bar">
        <a href='/'>
            <Image
                src={'/assets/logo/logo-square-no-bg.webp'}
                alt={'tandtholding'}
                className='logo'
                width={66*2}
                height={58*2}
            />
        </a>
        <ul className="flex flex-row justify-end menu-tabs">
            {
                menuItems.map((item)=><MenuTab key={'menu-item-'+Math.random()} name={item.name} link={item.link} />)
            }
        </ul>
    </div>
  )
}