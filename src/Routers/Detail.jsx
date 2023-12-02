
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import imagenDoctor from '../assets/doctor.jpg'
import {card, image, title, subtitle} from '../Styles/Card.module.css'
import  axios  from 'axios'

const Detail = () => {

  const [doctor, setDoctor] = useState({})
  const { id } = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  

  useEffect(() => {
    axios(url)
      .then(response => setDoctor (response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className={card}>
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
  )
}

export default Detail
