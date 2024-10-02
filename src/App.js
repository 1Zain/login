import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';  

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/Navbar" element={<Navbar />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
