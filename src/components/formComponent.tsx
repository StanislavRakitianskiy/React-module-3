interface OrderFormProps {
  onSubmit: (value: string) => void;
}
export default function FormComponents({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="username" defaultValue="Name" />
      <button type="submit">Pleace order</button>
    </form>
  );
}
