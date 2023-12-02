import React from 'react';
import Card from "../Components/Card";
import {grid} from '../Styles/Home.module.css';
import { useAppContext } from '../Context/Global.context';

const Favs = () => {

  const {state} = useAppContext()

  return (
    <div className={grid}>
      {state.favs.map(doctor => <Card doctor={doctor} key={doctor.id}/>)}
    </div>
  )
}

export default Favs
