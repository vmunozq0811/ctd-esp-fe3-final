import { useCharStates } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useCharStates(); // Accede al estado y dispatch del contexto

  return (
    <nav className={state.theme ? 'lightNav' : 'darkNav'}>
      <div>
        <Link to="/">
          <a className={state.theme ? 'lightNav' : 'darkNav'}>
            <font color="red">D</font>H Odonto
          </a>
        </Link>
      </div>
      <div>
        <Link to="/">
          <a className={state.theme ? 'lightNav' : 'darkNav'}>Home</a>
        </Link>
        <Link to="/contact">
          <a className={state.theme ? 'lightNav' : 'darkNav'}>Contact</a>
        </Link>
        <Link to="/favs">
          <a className={state.theme ? 'lightNav' : 'darkNav'}>Favs</a>
        </Link>
        <button
          className={state.theme ? "dark" : "light"}
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {state.theme ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
