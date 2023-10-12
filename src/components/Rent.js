import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../components/Rent.css';

function Rent() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleOnChange = (selectedIndex) => {
   
    if (selectedIndex === 0) {
      setShowLeftArrow(false);
      setShowRightArrow(true);
    } else if (selectedIndex === yourData.length - 1) {
      setShowLeftArrow(true);
      setShowRightArrow(false);
    } else {
      setShowLeftArrow(true);
      setShowRightArrow(true);
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <Carousel showArrows={true} onChange={handleOnChange} showStatus={false}>
          <div>
            <img src="../as.jpg" alt="Denim Jeans" />
          </div>
          <div>
            <img src="../as.jpg" alt="Another Image" />
          </div>
          <div>
            <img src="../as.jpg" alt="Yet Another Image" />
          </div>
         
        </Carousel>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
      
    </div>
  );
}

export default Rent;
