import axios, { Axios } from 'axios'
import React, { useState } from 'react'


const OnchangeEvent = () => {
  const[name,setName]=useState("")
const[email,setEmail]=useState("")

const handlesubmit=(e)=>{
  e.preventDefault()
 axios.post("https://6671136be083e62ee439f0ca.mockapi.io/Crud",{

  name,
  email
 }
   )
}
  return (
    <>
    <h1>OnchangeEvent</h1>
    <form onSubmit={handlesubmit}>
      <label>Enter your Name</label>
      <input 
      type="text"
      name="name"
      onChange={(e)=>setName(e.target.value)}
      />  
      <label> Enter your Email</label>
        <input
        type="email"
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      
    </form>

    <h1>{name}</h1>
    <br/>
    <h1>{email}</h1>
    </>
  )
}

export default OnchangeEvent