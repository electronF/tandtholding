
import { PropsWithChildren } from 'react'

import { capitalize } from "@/utils/text"
import Link from '@/types/link'

import './contactframe.scss'

interface Props extends PropsWithChildren
{
    title: String
    content: String
    link: Link
}

export default function ContactFrame({title, content, link}:Props) 
{
  return (
    <section className="flex flex-col justify-start contact-frame">
        <h2> {title} </h2>
        <p className='content'>{capitalize(content)}</p>
        <a href={link.link} className='button'>{capitalize(link.name)}</a>
    </section>
  )
}