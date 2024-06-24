import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetApi = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://6671136be083e62ee439f0ca.mockapi.io/Crud")
        .then(res=>setPosts(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <>
    <h1>Here is your data</h1>
    {posts.map((post)=>(
        <div >
            <ul key={post.id}>
                <li>{post.id}</li>
                <li>{post.name}</li>
                <li>{post.email}</li>
            </ul>
        </div>
    ))}
    
    </>
  )
}

export default GetApi