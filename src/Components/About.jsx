import React from 'react'
import '../Components/About.css'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
    <div className="App">
      <div className="container">
        <div className="row">
        <div className="text-side">
          <h1>Dr Bibek Babu Ghimire</h1>
          <p>
          Advanced Physiotherapy service with over 25 years of NHS and private practice, using years of experience to keep you active. Working across the NHS within London teaching hospitals.
          </p>
          <Link to={"/about"}className="read-more-btn">Read More</Link>
        </div>
        <div className="image-side">
          <img src="https://newhealthtimes.s3.amazonaws.com/uploads/article_images/How%20to%20become%20a%20phys1593396238.jpg" alt="Placeholder 1" />
        </div>
      </div>
      </div>
    </div>
    
    </>
    
  )
}

export default About