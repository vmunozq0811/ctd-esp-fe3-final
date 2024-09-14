import {useState} from "react";
import { useCharStates } from "../Components/utils/global.context";

const Form = () => {
  const { state } = useCharStates();
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName.length > 5 && /\S+@\S+\.\S+/.test(formData.email)) {
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`);
      setError('');
    } else {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form">      
      <form className={state.theme ? "light" : "dark"} onSubmit={handleSubmit}>
      <h2>Contacto</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Nombre completo"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
