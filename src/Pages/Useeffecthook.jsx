import React, { useEffect, useState } from 'react'

const Useeffecthook = () => {
    const [name, setname] = useState("karki");
    const changemypassword = () => {
        setname("shivateheboss");
    };
    useEffect(() => {
     alert("component will mount");
      
    }, [name])
    
    
  return (
    <>
    <h1>Useeffecthook</h1>
    <h1>{name}</h1>
    <button onClick={changemypassword}>click</button>
    </>
  )
}

export default Useeffecthook