export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARS":
      return { ...state, list: action.payload }; // Guardar los dentistas en la lista
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "TOGGLE_THEME": // Alternar entre claro y oscuro
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};
