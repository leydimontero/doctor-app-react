
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import imagenDoctor from '../assets/doctor.jpg'
import {card, image, title, darkTheme} from '../Styles/Card.module.css'
import {grid} from '../Styles/Detail.module.css'
import  axios  from 'axios'
import { useAppContext } from '../Context/Global.context'

const Detail = () => {

  const { state } = useAppContext();
  const [doctor, setDoctor] = useState({})
  const { id } = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  

  useEffect(() => {
    axios(url)
      .then(response => setDoctor (response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className={grid}>
      <div className={state.theme === 'dark' ? darkTheme:card}>
      <h3>{doctor.name}</h3>
      <img
            src={imagenDoctor}
            alt="Default"
            className={image}
          />
      <h3 className={title}>{doctor.phone}</h3>
      <h3>{doctor.email}</h3>
      <h3>{doctor.website}</h3>

    </div>
    </div>
    
  )
}

export default Detail
