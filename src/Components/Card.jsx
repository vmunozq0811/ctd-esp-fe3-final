import { Link } from 'react-router-dom';
import { useCharStates } from "../Components/utils/global.context";


const Card = ({ dentist }) => {
  const { state,dispatch  } = useCharStates();
  const isFav = state.favs.find((fav) => fav.id === dentist.id);
  console.log(isFav);
  const addFav = ()=>{
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist });
  }

  return (
    <div className={`card ${state.theme ? 'light' : 'dark'}`}>
      <img src="public/images/doctor.jpg" alt=""/>
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
      <button className="favButton" onClick={addFav}>{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
