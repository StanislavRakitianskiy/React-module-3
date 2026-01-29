function SubmitData() {
  const handleSubmet = (lalala: FormData) => {
    const handleSubmet = lalala.get("username") as string;
    console.log(handleSubmet);
  };
  return (
    <form action={handleSubmet}>
      <input name="username" type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default SubmitData;
