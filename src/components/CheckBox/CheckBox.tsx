function CheckBox() {
  const handleCheckBox = (formData: FormData) => {
    const order = formData.getAll("order") as string[];
    console.log("Selected Checkboxes:", order);
  };
  return (
    <form action={handleCheckBox}>
      <label>
        <input type="checkbox" name="order" value="First" /> First
      </label>
      <label>
        <input type="checkbox" name="order" value="Second" /> Second
      </label>
        <label>
        <input type="checkbox" name="order" value="Third" /> Third
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default CheckBox;
