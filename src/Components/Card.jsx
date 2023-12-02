import React from "react";
import imagenDoctor from '../assets/doctor.jpg'
import { Link } from 'react-router-dom'
import {card, image, title, subtitle, darkTheme, buttonFav} from '../Styles/Card.module.css'
import { useAppContext } from '../Context/Global.context'

const Card = ({doctor }) => {
  
  const { state, dispatch } = useAppContext();

  const addFav = () => {
    dispatch({type: 'ADD_FAV', payload: doctor})
  }

  const removeFav = () => {
    const updatedFavs = state.favs.filter(fav => fav.id !== doctor.id);
    dispatch({ type: 'DELETE_FAV', payload: updatedFavs });
  }
  
  return (
   
      <div key={doctor.id} className={state.theme === 'dark' ? darkTheme:card}>
        <img src={imagenDoctor} alt="Default"className={image}/>
        <Link to={'/detail/' + doctor.id}>
          <h4 className={title}>{doctor.name}</h4>
        </Link>
        <h4 className={subtitle}>{doctor.email}</h4>

        {state.favs.find((fav) => fav.id === doctor.id) ? (
        <button className={buttonFav} onClick={removeFav}>❌</button>
      ) : (
        <button className={buttonFav} onClick={addFav}>⭐</button>
      )}
       
      </div>  
  )
}

  export default Card