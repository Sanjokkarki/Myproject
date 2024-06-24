import React from 'react'

const Services = () => {
  const headerStyle = {
    backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5edb8cc5df0c827d5e29fcb5/1630332379826-KVOEWRG18WXNKG6CUOMG/unsplash-image-QXDjHlp59-o.jpg)', 
    backgroundSize: 'fill',
    backgroundPosition: 'center',
    height: '300px',
    opacity: 0.8 , 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
     width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    
  };
  return (
    <>
   <header style={headerStyle}>
   <div style={overlayStyle}>
   <h1>Services</h1>
   </div>
   </header>
   <div className='container'>
        <div className='row'>
   
<div className='text'>
<h1>Physiotherapy services</h1>
<p>Expert assessment and treatment can be offered to all, from elite athlete to office workers and schoolchildren.  Give your body the care and attention it deserves.  Having years of experience gaining a wide breadth of knowledge and excellent communication skills to you informed whist aiding you.</p>
<p>Physiotherapy is a science based, increasingly evidence-based practice, with the aim to restore joint, nerve and muscle.  My consultations take a "holistic" approach to your health; looking at all aspects of life which are affected by pain, dysfunction, biomechanics, posture, disease, or aging.</p>
<p>As your physiotherapist I will offer you the most effective course of treatment for you needs this may consist of myofascial release, mobilisations, stretching and home exercises, ergonomic and postural advice.  Understanding the cause and how to manage and prevent problems returning.  Physiotherapy aims to restore fitness and function, including flexibility, strength, coordination and balance.</p>
</div>

<div className='image'>
<img src="https://www.shutterstock.com/image-photo/pain-mans-body-isolated-on-600nw-189716345.jpg" alt="" style={{width: '100%', height: '350px'}} />
</div>

    </div>
    </div>

    </>
  )
}

export default Services