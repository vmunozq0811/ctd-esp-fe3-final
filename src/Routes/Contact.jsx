import Form from '../Components/Form'
import { useCharStates } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useCharStates();
  return (
    <div className={`contact ${state.theme ? "light" : "dark"}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact