import React from 'react'
import Navbar from '../Components/Navbar'
import ImageSwiper from '../Components/ImageSwiper';
import About from '../Components/About';
import ImageGrid from '../Components/ImageGrid';
import Help from '../Components/Help';



const Home = () => {
  
    const slides = [
      {image:'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186427438-1024x749.jpeg'},
      {image:'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_528361659-683x1024.jpeg'},
      {image:'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186426662-1024x683.jpeg'},
      {image:'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_529349040-1024x683.jpeg'},
    ];
  return (
    <>
   
    <div> <ImageSwiper slides={slides} />
    </div>
    <div><About/></div>
    <div><ImageGrid/></div>
    <div><Help/></div>
   

    </>
  )
}

export default Home