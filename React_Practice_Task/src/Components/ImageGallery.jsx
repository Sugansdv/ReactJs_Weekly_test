import React, { useState } from 'react';
import '../assets/Css/ImageGallery.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';


const images = [img1, img2, img3];

const ImageGallery = () => {
  const [Index, setIndex] = useState(null);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className="gallery-container">
      <h2>Flowers Gallery</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`image-item ${Index === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
