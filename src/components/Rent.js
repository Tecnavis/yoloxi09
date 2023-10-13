import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/Rent.css';

function Rent() {
  // Define your image data
  const images = [
    { src: '../as.jpg', alt: 'Denim Jeans' },
    { src: '../d.jpeg', alt: 'Image 2' },
    { src: '../as.jpg', alt: 'Image 3' },
  ];

  // Assume data from the admin panel is stored in a variable 'propertyData'
  let propertyData = [
    {
      name: 'Property 1',
      location: 'Location 1',
      price: '$1000',
      type: 'For Sale',
    },
    {
      name: 'Property 2',
      location: 'Location 2',
      price: '$2000',
      type: 'For Rent',
    },
    {
      name: 'Property 3',
      location: 'Location 2',
      price: '$2000',
      type: 'For Rent',
    },
    {
      name: 'Property 1',
      location: 'Location 1',
      price: '$1000',
      type: 'For Sale',
    },
    {
      name: 'Property 2',
      location: 'Location 2',
      price: '$2000',
      type: 'For Rent',
    },
    {
      name: 'Property 3',
      location: 'Location 2',
      price: '$2000',
      type: 'For Rent',
    },
    // Add more property data as needed
  ];

  return (
    <div className="card-container">
      {propertyData.map((property, index) => (
        <div className="product-card" key={index}>
          <div className="slider-container">
            <Carousel showArrows={true} showStatus={false} showThumbs={false}>
              {images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="product-details">
            <h2>{property.name}</h2>
            <p className="description">Location: {property.location}</p>
            <p className="price">Price: {property.price}</p>
            <p className="type">Type: {property.type}</p>
            
            <div className="buy-button-container">
              <button className="buy-button">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rent;
