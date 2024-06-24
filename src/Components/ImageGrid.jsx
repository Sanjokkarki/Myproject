import React from 'react';
import './ImageGrid.css';
import { Link } from 'react-router-dom';

const ImageGrid = () => {
 


  return (
    <div className='container'>
        <div className='row'>
    <div className="parent">
    <div className="div1"><img src="https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_283483720.jpg" alt="" /> </div>
    <div className="div2"><img src="https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186427438-1024x749.jpeg" alt="" /> </div>
    <div className="div3"> <img src="https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_528361659-683x1024.jpeg" alt="" /></div>
    <div className="div4"> <img src="https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186426662-1024x683.jpeg" alt="" /></div>
    <div className="div5"><img src="https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_529349040-1024x683.jpeg" alt="" /> </div>
    <div className="div6"><img src="https://lead-academy.org/blog/wp-content/uploads/2022/10/how-do-i-become-a-physiotherapist.webp" alt="" /> </div>
    </div>
<div className='text'>
<h1>Physiotherapy services</h1>
<p>Expert assessment and treatment can be offered to all, from elite athlete to office workers and schoolchildren.  Give your body the care and attention it deserves.  Having years of experience gaining a wide breadth of knowledge and excellent communication skills to you informed whist aiding you.</p>
<Link to={"/services"} className='read-more-btn'>Read More</Link>
</div>

    </div>
    </div>
  );
};

export default ImageGrid;
