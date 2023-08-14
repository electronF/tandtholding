import FormField from "./formfield"


interface Form
{
    action: string
    fields: FormField[]
    buttonName: string
}

export default Form