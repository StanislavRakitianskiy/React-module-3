export default function FormAction() {
    const handleSubmitAction = (formData: FormData) => {
        const username = formData.get('username') as string;
        console.log('Name: ', username)
    }
    const nameUser = 'Stanislav Rakitianskyi';
    return (
        <form action={handleSubmitAction}>
        <input type="text" name="username" defaultValue={nameUser} />
        <button type="submit">Click me Submit</button>
        </form>
    )
}