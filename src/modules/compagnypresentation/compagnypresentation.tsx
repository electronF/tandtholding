import { PropsWithChildren, ReactNode } from 'react';


import './compagnypresentation.scss'

interface Props extends PropsWithChildren
{
    children: ReactNode
}

export default function CompagnyPresentation({children}:Props)
{
    return (
        <section className='flex compagny-presentation'>
            {children}
        </section>
    )
}