import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';


function App() {
  return (
    <>
      <Navbar />
    <Routes basename="/myportfolio">
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
      <Footer />
    </>
  );
}

export default App;
