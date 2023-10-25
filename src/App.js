import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Rent from './components/Rent';
import Sell from './components/sell';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Whychoose from './components/whychoose';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
        <WhychooseOnlyOnHomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

function WhychooseOnlyOnHomePage() {
  // Get the current location using useLocation()
  const location = useLocation();

  // Check if the current location is the home page
  if (location.pathname === '/home') {
    return <Whychoose />;
  } else {
    return null; // Don't render Whychoose on other pages
  }
}
