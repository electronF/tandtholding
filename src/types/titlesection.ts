import Service from "./service"
import TextContent from "./textualcontent"

interface TitledSection
{
    title: string
    level: string
    section: TextContent|TextContent[]|Service|Service[]
}

export default TitledSection