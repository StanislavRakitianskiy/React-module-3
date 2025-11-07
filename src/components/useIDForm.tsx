import { useId } from "react";
export default function UseIDForm() {
  const fileId = useId();
  return (
    <form>
      <label htmlFor={`${fileId}-username`}>
        <input type="text" name="username" id={`${fileId}-username`} />
      </label>
      <label htmlFor={`${fileId}-usermail`}>
        <input type="text" name="usermail" id={`${fileId}-usermail`} />
      </label>
      <button type="submit">Click Label</button>
    </form>
  );
}
