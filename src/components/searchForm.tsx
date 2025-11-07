interface SearchFormProps {
  onSubmit: (topic: string) => void;
}
export default function SearchForm({ onSubmit }: SearchFormProps) {
  // const myKey = import.meta.env.VITE_API_KEY;
  // console.log(myKey)
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    if (topic === "") {
      alert("Pleace enter search topic");
      return;
    }
    onSubmit(topic);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
