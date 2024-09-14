import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCharStates } from "../Components/utils/global.context";


const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useCharStates();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setDentist(res.data))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <div className={state.theme ? "light" : "dark"}>
      <h1>Detail Dentist </h1>
      {dentist ? (
        <table>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>{dentist.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{dentist.email}</td>
            </tr>
            <tr>
              <td>Teléfono</td>
              <td>{dentist.phone}</td>
            </tr>
            <tr>
              <td>Sitio web</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export default Detail