  import React, { useState } from 'react';
  import '../components/navbar.css';

  function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');

    const navToggler = () => {
      setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
      setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };


  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Yoloxi
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="home" className="link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="Rent" className="link">
            Rent
          </a>
        </li>
        <li className="nav__item">
          <a href="sell" className="link">
           Sell
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="link">
            Contact
          </a>
        </li>
        {/* Add Sign Up and Login buttons */}
        <li className="nav__item">
          <a href="#" className="link">
            Sign Up
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="link">
            Login
          </a>
        </li>
      </ul>
      <div onClick={navToggler} className="nav__toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}


  export default Navbar;
