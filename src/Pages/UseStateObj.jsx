import React, { useState } from 'react'

const UseStateObj = () => {
    const obj={
        name:"karki",
        age:22,
        address:"chitwan",
        contact:"123456789",
    };
    const [data, setdata] = useState(obj);

    const changename=()=>{
        setdata({
             name:"rahul",
             age:23,
             address:"kathmandu",
             contact:"987654321",


        })
    }
  return (
    <>
    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    <h1>{data.address}</h1>
    <h1>{data.contact}</h1>

    <button onClick={changename}>click</button>
    
    </>
  )
}

export default UseStateObj