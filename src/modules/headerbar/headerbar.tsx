import HorizontalContactBar from '@/components/uix/horizontalcontactbar/horizontalcontactbar'
import Banner from '@/modules/banner/banner'

export default function HeaderBar() {
    return (
    <header className='flex flex-col'>
        <HorizontalContactBar />
        <Banner />
    </header>
    )
}