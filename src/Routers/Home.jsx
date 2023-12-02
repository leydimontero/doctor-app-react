import Card from "../Components/Card"
import { useAppContext } from "../Context/Global.context"
import {grid} from '../Styles/Home.module.css'


const Home = () => {
    
  const {state} =  useAppContext ()
   
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>HOME</h1>
      <div className={grid}>
      {state.list.map(doctor => <Card doctor={doctor} key={doctor.id}/>)}
      </div>
      
    </div>
  )
}

export default Home


