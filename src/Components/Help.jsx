import React from 'react'
import '../Components/Help.css'

const Help = () => {
    const headerStyle = {
        backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5edb8cc5df0c827d5e29fcb5/1630332379826-KVOEWRG18WXNKG6CUOMG/unsplash-image-QXDjHlp59-o.jpg)', 
        backgroundSize: 'fill',
        backgroundPosition: 'center',
        height: '400px',
        width: '100%',
        opacity: 0.7 , 
        
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      };
    
      const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
         width: '100%',
        height: '100%',
       
        alignItems: 'center',
        justifyContent: 'center',
        
      };
  return (
    <>
    <header style={headerStyle}>
      <div className='overlay' style={overlayStyle}>
        <div className='text-banner'>
        <h1>How can I help you?</h1>
        <h3>Initial Consultation: 45min - £65</h3>
        <h3>Follow-up Appointments: 30min - £45</h3>
        <p>Currently the majority of Physiotherapy services are self-funding.  If you wish to go through your health provider, please contact me first make sure you I have all the correct details to support you.</p>
        </div>
      </div>
    </header>
    </>
  )
}

export default Help