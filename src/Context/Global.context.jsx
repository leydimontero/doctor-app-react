import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { reducer } from '../Reducer/reducer';


const ContextGlobal = createContext();

const initialState = {
  theme: 'dark',
  list: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
};


const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    axios(url)
      .then((response) => {
        console.log('API Response:', response.data)
        dispatch({type:'GET_DOCTORS', payload: response.data})
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{
      state, dispatch,
    }}>
      {children}
    </ContextGlobal.Provider>
  )
}
export default ContextProvider

export const useAppContext = () => useContext(ContextGlobal)