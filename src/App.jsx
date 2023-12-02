import { Route, Routes } from 'react-router-dom'
import styles from './Styles/App.module.css'
import { useAppContext } from './Context/Global.context'
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Favs from './Routers/Favs'
import Contact from './Routers/Contact'
import Detail from './Routers/Detail'
import Home from './Routers/Home'



function App() {

  const { state, dispatch } = useAppContext();
  
  return (
    <div className={state.theme === 'dark' ? styles['dark-theme'] : styles ['light-theme']}>
      <Navbar/>
    
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path ='/favs' element={<Favs/>}/>
          <Route path='*' element={<h1>Page not found - Error 404</h1>}/>
      </Routes>
      
      <Footer/>
      
      
    </div>
    
  ) 
}

export default App;
