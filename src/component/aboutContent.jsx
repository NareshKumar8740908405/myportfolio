import React from 'react'
import "./aboutContent.css";
import { Link } from "react-router-dom";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
        <div className='about'>

            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a React Front-end Developer. I create responsive secure websites</p>
                <Link to="/contact"><button className='btn'>Contact</button></Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack bottom'>
                        <img src={React2} className='img' alt='true' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent