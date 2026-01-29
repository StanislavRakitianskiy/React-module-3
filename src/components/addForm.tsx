const addUser: string = 'Stas'
export default function FormAdd() {
    const handleSubmet = (lalala: FormData) => {
        const username = lalala.get('username') as string;
        console.log(username)
    }
    return (
        <form action={handleSubmet}>
            <input type="text" name="username" defaultValue={addUser}/>
            <button type="submit">UpDate</button>
        </form>
    )
}