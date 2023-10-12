import React from 'react';
import '../components/home.css';

function Home(props) {
    return (
        <div>
            <h1>Search Your Next Home</h1>
            <div>
                <h3>Find & Sell Featured Properties Located Near You</h3>
            </div>
            <div className="rectangular-bar">
                <div className="section">
                    <h4>Purpose</h4>
                    <select>
                        <option value="Sell">Sell</option>
                        <option value="Buy">Buy</option>
                     </select>
                </div>
                <div className="section">
                    <h4>Location</h4>
                    <select>
                        <option value="delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="newyork">New York</option>
                        <option value="london">London</option>
                    </select>
                </div>
                <div className="section">
                    <h4>Type</h4>
                    <select>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="office">Office</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
}

export default Home;
