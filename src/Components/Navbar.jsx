import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {navbar, backButton, darkNavbar, modeButton} from '../Styles/Navbar.module.css'
import { useAppContext } from '../Context/Global.context'


const Navbar = () => {

  const navigate = useNavigate()
  const { state, dispatch } = useAppContext();

  const toggleTheme = () => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  };

  return (
    <nav className={state.theme === 'dark' ? darkNavbar:navbar}>
      <button onClick={() => navigate(-1)} className={backButton}> ⬅ </button>
      <Link to='/'><h4>Home</h4></Link>
      <Link to='/contact'><h4>Contact</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      <button className={modeButton} onClick = {toggleTheme}>{state.theme === 'dark' ? '☀️' : '🌑'}</button>
    </nav>
  )
}

  export default Navbar