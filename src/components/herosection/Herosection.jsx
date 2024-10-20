import React, { useState, useEffect } from 'react';
import './Carousel.css';

const sliderImages = [
  'https://media.nutristar.in/banner/diwali-1728556788911600.jpeg',
  'https://media.nutristar.in/banner/diwali-1728556788911600.jpeg',
  'https://media.nutristar.in/banner/diwali-1728556788911600.jpeg',
];

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Autoplay every 3 seconds
    return () => clearInterval(slideInterval); // Clean up on unmount
  }, []);

  return (
    < div className="Whole">


    <div className="carousel-container">
      {/* Carousel Wrapper */}
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {sliderImages.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
         </div>
  );
  
};

export default Herosection;
