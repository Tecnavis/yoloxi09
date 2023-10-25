import React, { useState } from 'react';
import '../components/home.css';

function Home(props) {
    const [selectedOption, setSelectedOption] = useState("optionA");

    const handleOptionClick = (option) => () => {
        setSelectedOption(option);
    };

    return (
        <div className='squ-box'>
            <h1>Find a home to call your own</h1>
            <div className="switch-menu">
                <p
                    className={selectedOption === "optionA" ? "active" : ""}
                    onClick={handleOptionClick("optionA")}
                >
                    rent
                </p>
                <p
                    className={selectedOption === "optionB" ? "active" : ""}
                    onClick={handleOptionClick("optionB")}
                >
                    sell
                </p>
            </div>
        </div>
    );
}

export default Home;
