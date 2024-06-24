import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSwiper.css';  

const ImageSwiper = ({ slides }) => {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-fluid">
    <div className="image-swiper">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index}`} className="slide-image" />
            <div className="slide-text"><h2>Physiotherapy</h2>
                 <p>Bringing a personal wealth of experience</p></div>
          </div>
          
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default ImageSwiper;
