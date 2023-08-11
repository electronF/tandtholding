import HorizontalMenuBar from '@/components/uix/horizontalmenubar/horizontalmenubar'

import './banner.scss'


export default function Banner() {
    return (
    <section className='flex flex-col justify-start banner' style={{backgroundImage: 'url(../assets/images/background.webp)'}}>
        <HorizontalMenuBar />
    </section>
    )
}