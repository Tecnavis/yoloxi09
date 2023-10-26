import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../components/Rent.css';

function Rent() {
  const images = [
    { src: '../as.jpg', alt: 'Denim Jeans' },
    { src: '../d.jpeg', alt: 'Image 2' },
    { src: '../as.jpg', alt: 'Image 3' },
  ];

  const [propertyData, setPropertyData] = useState([
    {
      name: 'Property 1',
      location: 'Location 1',
      price: 1000,
      type: 'For Sale',
      bhk: 2,
      furnishing: 'Furnished',
      propertyType: 'Apartment',
      preferredTenants: 'Family',
      availability: 'Immediate',
    },
    {
      name: 'Property 2',
      location: 'Location 2',
      price: 2000,
      type: 'For Rent',
      bhk: 3,
      furnishing: 'Semi-furnished',
      propertyType: 'House',
      preferredTenants: 'Bachelor',
      availability: 'Within 1 month',
    }, {
      name: 'Property 1',
      location: 'Location 1',
      price: 1000,
      type: 'For Sale',
      bhk: 2,
      furnishing: 'Furnished',
      propertyType: 'Apartment',
      preferredTenants: 'Family',
      availability: 'Immediate',
    },
    {
      name: 'Property 2',
      location: 'Location 2',
      price: 2000,
      type: 'For Rent',
      bhk: 3,
      furnishing: 'Semi-furnished',
      propertyType: 'House',
      preferredTenants: 'Bachelor',
      availability: 'Within 1 month',
    },
    // Add more property data as needed
  ]);

  const [filterBHK, setFilterBHK] = useState('Any');
  const [filterFurnishing, setFilterFurnishing] = useState('Any');
  const [filterPropertyType, setFilterPropertyType] = useState('Any');
  const [filterPreferredTenants, setFilterPreferredTenants] = useState('Any');
  const [filterAvailability, setFilterAvailability] = useState('Any');
  const [filterPriceRange, setFilterPriceRange] = useState([0, 10000]);

  const [showPriceSlider, setShowPriceSlider] = useState(false);

  const togglePriceSlider = () => {
    setShowPriceSlider(!showPriceSlider);
  };

  const formatPrice = (value) => {
    if (value >= 100000) {
      return `${value / 100000}L`;
    } else {
      return `${value / 1000}K`;
    }
  };

  const getButtonText = () => {
    const minPrice = filterPriceRange[0];
    const maxPrice = filterPriceRange[1];
    return `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
  };

  const filterProperties = () => {
    return propertyData.filter((property) => {
      return (
        (filterBHK === 'Any' || property.bhk === parseInt(filterBHK)) &&
        (filterFurnishing === 'Any' || property.furnishing === filterFurnishing) &&
        (filterPropertyType === 'Any' || property.propertyType === filterPropertyType) &&
        (filterPreferredTenants === 'Any' || property.preferredTenants === filterPreferredTenants) &&
        (filterAvailability === 'Any' || property.availability === filterAvailability) &&
        property.price >= filterPriceRange[0] &&
        property.price <= filterPriceRange[1]
      );
    });
  };

  const stepValues = {
    0: '0K',
    100000: '1L',
    200000: '2L',
  };

  return (
    <div className="rent-page">
      <div className="filter-sort-container">
        <div className="filter-box">
          <label>
            BHK Type:
            <select value={filterBHK} onChange={(e) => setFilterBHK(e.target.value)}>
              <option value='Any'>Any</option>
              <option value='2'>2 BHK</option>
              <option value='3'>3 BHK</option>
              <option value='4'>4 BHK</option>
            </select>
          </label>
          <label>
            Furnishing:
            <select value={filterFurnishing} onChange={(e) => setFilterFurnishing(e.target.value)}>
              <option value='Any'>Any</option>
              <option value='Furnished'>Furnished</option>
              <option value='Semi-furnished'>Semi-furnished</option>
              <option value='Unfurnished'>Unfurnished</option>
            </select>
          </label>
          <label>
            Property Type:
            <select value={filterPropertyType} onChange={(e) => setFilterPropertyType(e.target.value)}>
              <option value='Any'>Any</option>
              <option value='Apartment'>Apartment</option>
              <option value='House'>House</option>
            </select>
          </label>
          <label>
            Preferred Tenants:
            <select value={filterPreferredTenants} onChange={(e) => setFilterPreferredTenants(e.target.value)}>
              <option value='Any'>Any</option>
              <option value='Family'>Family</option>
              <option value='Bachelor'>Bachelor</option>
            </select>
          </label>
          <label>
            Availability:
            <select value={filterAvailability} onChange={(e) => setFilterAvailability(e.target.value)}>
              <option value='Any'>Any</option>
              <option value='Immediate'>Immediate</option>
              <option value='Within 1 month'>Within 1 month</option>
            </select>
          </label>
          <label>
            Price Range:
            <button onClick={togglePriceSlider}>
              {showPriceSlider ? getButtonText() : 'Select Price Range'} {/* Display selected range */}
            </button>
            {showPriceSlider && (
              <div className="price-slider">
                <Slider
                  range
                  min={0}
                  max={200000}
                  step={40000} // Set the step to 40K
                  value={filterPriceRange}
                  onChange={setFilterPriceRange}
                  marks={stepValues} // Add the marks
                />
                <div className="price-range-values">
                  <span>Min: {formatPrice(filterPriceRange[0])}</span>
                  <span>Max: {formatPrice(filterPriceRange[1])}</span>
                </div>
              </div>
            )}
          </label>
        </div>
      </div>
      <div className='property-card-container'>
        {filterProperties().map((property, index) => (
          <div className='property-card' key={index}>
            <div className='slider-container'>
              <Carousel showArrows={true} showStatus={false} showThumbs={false}>
                {images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className='property-details'>
              <h2>{property.name}</h2>
              <p className='description'>Location: {property.location}</p>
              <p className='price'>Price: ${property.price}</p>
              <p className='bhk'>BHK: {property.bhk} BHK</p>
              <p className='furnishing'>Furnishing: {property.furnishing}</p>
              <p className='property-type'>Property Type: {property.propertyType}</p>
              <p className='preferred-tenants'>Preferred Tenants: {property.preferredTenants}</p>
              <p className='availability'>Availability: {property.availability}</p>
              <div className='buy-button-container'>
                <button className='buy-button'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rent;