import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Rent from './components/Rent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        </Routes>
        
      <Whychoose />
      <Footer />
      </div>
    </Router>
 );
}

export default App;
