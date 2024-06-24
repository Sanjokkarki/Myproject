import React from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {

    const timroid = useParams()


  return (
    <>
    <h1>User  {timroid.id}</h1>
    </>
  )
}

export default Userdetails