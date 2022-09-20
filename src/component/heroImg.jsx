import React from 'react';
import "./heroImg.css";
import Introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={Introimg} alt='Introimg' />
        </div>

        <div className='content'>
            <p>HI, I'M A WEB DEVLOPER.</p>
            <h1>Frontend Devloper</h1>

            <div>
                <Link to="/project" className='btn'>PROJECTS</Link>
                <Link to="/contact" className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg