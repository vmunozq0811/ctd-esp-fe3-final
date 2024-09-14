import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useCharStates();

  return (
    <div className={`fav ${state.theme ? "light" : "dark"}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((fav) => <Card key={fav.id} dentist={fav} />)
        ) : (
          <p>No hay dentistas favoritos</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
