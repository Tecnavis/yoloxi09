import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Whychoose from './components/whychoose';

function App() {
  return (
    <div>
      <Navbar />
      <Home /> 
      <About />
      <Whychoose />
      
    </div>
  );
}

export default App;
