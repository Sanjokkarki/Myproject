import React, { useContext } from 'react'
import { paisa } from '../App';

const Ashok = () => {
    const meropaisa=useContext(paisa);
  return (
    <div>Ashok ley {meropaisa} </div>
  )
}

export default Ashok