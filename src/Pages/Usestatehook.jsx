import React, { useState } from 'react'

const Usestatehook = () => {
    const myarray=useState("karki");
    console.log(myarray)
  return (
    <>

    <h1>{myarray[0]}</h1>
    <button onClick={()=>myarray[1]("rahul")}>click</button>
    
    </>
  )
}

export default Usestatehook