import { PropsWithChildren, ReactNode } from 'react';


import './emptysection.scss'

interface Props extends PropsWithChildren
{
    children?: ReactNode
}

export default function EmptySection({children}:Props)
{
    return (
        <section className='flex empty-section'>
            {children}
        </section>
    )
}