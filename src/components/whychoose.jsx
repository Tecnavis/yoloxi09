import React from 'react';
import '../components/whychoose.css';

function WhyChoose(props) {
    return (
        <div className="why-choose-section">
            <h1 className="section-heading">Why choose us? </h1>
            <div className="icons-container">
                <div className="icon-container">
                    <h3>discount</h3>
                    <img src="./discount.png" alt="discount" style={{ width: '5%' }} />
                    <h5 className="icon-description">Your H5 Icon Description</h5>
                </div>
                <div className="icon-container">
                    <h3>Fast</h3>
                    <img src="./fast.png" alt="discount" style={{ width: '5%' }} />
                    <h5 className="icon-description">Your H5 Icon Description</h5>
                </div>
                <div className="icon-container">
                    <h3>search</h3>
                    <img src="./search.png" alt="discount" style={{ width: '5%' }} />
                    <h5 className="icon-description">Your H5 Icon Description</h5>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;
