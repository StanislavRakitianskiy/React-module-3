import { useId } from "react";
function SelectOp() {
    const selectId = useId();
    const handleSelectOpions = (formData: FormData) => {
        const selectedOption = formData.get("resp") as string;
        console.log("Selected option:", selectedOption);
    }
    return (
        <form action={handleSelectOpions}>
            <label htmlFor={selectId}>
                <select name="resp" id={selectId}>
                    <option value="">-- Variant --</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
export default SelectOp;