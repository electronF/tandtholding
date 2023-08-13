import { PropsWithChildren } from 'react'

import './labeledsection.scss'

interface Props extends PropsWithChildren
{
    title:string
    content: string
}


export default function LabeledSection({title, content}:Props)
{
    return (
        <div className='flex flex-col labeled-section'>
            <span className='section-title'>{title}</span>
            <p className='section-content'>{content}</p>
        </div>
    )
}