interface HttpServerSubmetProps {
  onSubmit: (value: string) => void;
}
function HTTPServerSubmet({ onSubmit }: HttpServerSubmetProps) {
  const handleSubmit = (event: FormData) => {
    const value = event.get("serch") as string;
    if (value === "") {
      alert("Please enter a server URL.");
    }
    onSubmit(value);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="serch" placeholder="Enter serch URL" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default HTTPServerSubmet;
