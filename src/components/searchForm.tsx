interface SearchFormProps {
  onSubmit: (event: string) => void;
}
export default function SearchForm({onSubmit}: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const userTopic = formData.get('topic') as string;
    if (userTopic === '') {
      alert('Алё блядь, давай может ты что-то введёшь?')
    }
    onSubmit(userTopic)
  }
  return (
    <form action={handleSubmit}>
      <input type="text" name="topic" />
      <button type="submit">Search st</button>
    </form>
  )
}