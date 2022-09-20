import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./routes/home";
import About from './routes/about';
import Project from './routes/project';
import Contact from './routes/contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';


function App() {
  return (
    <>
      <Navbar />
    <Routes>
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
