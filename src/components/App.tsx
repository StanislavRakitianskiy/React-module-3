import FormDatas from './formData'
import FormAction from './formAction'
import FormComponents from './formComponent'

import '../App.css'

function App() {
const handleOrder = (data: string) => {
  console.log("Order receiced form: ", data)
  // можна зберегти замовлення, викликати API, показати повідомлення тощо
}
  return (
    <>
      <FormDatas></FormDatas>
      <FormAction></FormAction>
      <FormComponents onSubmit={handleOrder}></FormComponents>
    </>
  )
}

export default App
