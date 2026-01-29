function RadioBtn() {
  const getFormRadio = (formDt: FormData) => {
    const handleRadioBtnChange = formDt.get("radioBtn") as string;
    console.log("Selected Radio Button:", handleRadioBtnChange);
  };
  return (
    <form action={getFormRadio}>
      <fieldset>
        <label>
          <input type="radio" name="radioBtn" value="Option 1" defaultChecked /> Option 1
        </label>
        <label>
          <input type="radio" name="radioBtn" value="Option 2" /> Option 2
        </label>
        <label>
          <input type="radio" name="radioBtn" value="Option 3" /> Option 3
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
export default RadioBtn;
