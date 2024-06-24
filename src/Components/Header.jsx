// Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundImage: 'url(https://lead-academy.org/blog/wp-content/uploads/2022/10/how-do-i-become-a-physiotherapist.webp)', 
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
    <header style={headerStyle}>
      <div style={overlayStyle}>
        <h1>About</h1>
      </div>
    </header>
  );
};

export default Header;
