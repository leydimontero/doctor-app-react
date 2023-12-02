export const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_THEME':
        return { ...state, theme: action.payload }
      case 'GET_DOCTORS':
        return { ...state, list: action.payload }
      case 'ADD_FAV':
        return {...state, favs: [...state.favs, action.payload]}
      case 'DELETE_FAV':
        return { ...state, favs: action.payload }
      default:
        return state;
    }
  };