import { PropsWithChildren, ReactNode } from 'react'

import './labeledsection.scss'

interface Props extends PropsWithChildren
{
    title:string
    children: ReactNode
}


export default function LabeledSection({title, children}:Props)
{
    return (
        <div className='flex flex-col labeled-section'>
            <span className='section-title'>{title}</span>
            {children}
        </div>
    )
}