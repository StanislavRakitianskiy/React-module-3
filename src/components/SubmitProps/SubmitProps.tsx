interface SubmitProps {
    onSubmit: (lalala: string) => void;
}
function SubmitSelect({ onSubmit }: SubmitProps) {
    const handleSubmit = (tutut: FormData) => {
        const value = tutut.get("inputName") as string;
        onSubmit(value);
    }
    return (
        <form action={handleSubmit}>
            <input type="text" name="inputName" placeholder="SubmitSelect"/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default SubmitSelect;