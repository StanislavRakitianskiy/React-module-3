interface OrderFormProps {
    onSubmit: (event: string) => void;    
}
export default function OrderForm({onSubmit}: OrderFormProps) {
    const handleSubmet = (formData: FormData) => {
        const username = formData.get('usernamE') as string;
        onSubmit(username)
    }
    return (
        <form action={handleSubmet}>
            <input type="text" name="usernamE" defaultValue="void"/>
            <button type="submit">Send</button>
        </form>
    )
}