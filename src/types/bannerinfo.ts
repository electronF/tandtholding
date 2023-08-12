import Link from "./link"

interface BannerInfo 
{
    backgroundImagePath: string
    backgroundColor: string
    title: string
    content: string
    button?: Link
}

export default BannerInfo