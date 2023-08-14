interface FormField
{
    name: string;
    type: "text" | "email" | "phone" | "file" | "date" | "time" | "textarea" | "select";
    placeHolder?: string;
    value?: string;
}

export default FormField