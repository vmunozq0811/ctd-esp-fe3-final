import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { reducer } from "./reducer.js";

export const initialState = {
  list: [], // Aquí guardaremos los usuarios (dentistas)
  favs: JSON.parse(localStorage.getItem("favs")) || [], // Favoritos
  theme: true, // true para claro, false para oscuro
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  // URL de la API de dentistas
  const url = "https://jsonplaceholder.typicode.com/users";

  // Obtener los dentistas desde la API
  useEffect(() => {
    axios.get(url).then((res) => {
      dispatch({ type: "GET_CHARS", payload: res.data });
    });
  }, []);

  // Guardar favoritos en localStorage
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
// Custom hook para usar el contexto
export const useCharStates = () => {
  return useContext(ContextGlobal);
};

