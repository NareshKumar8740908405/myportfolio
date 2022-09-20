import React from 'react'
import {FaHome, FaLinkedin, FaFacebook, FaMailBulk, FaPhone, FaGithub} from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Q-143, Mohan Garden, New-Delhi</p>
                        <p>DELHI</p>
                    </div>
                </div>
                <div className="phone">
                   <h4>
                     <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                     +91-874-090-8405
                   </h4>
                </div>
                <div className="email">
                   <h4>
                     <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                     nareshkumar12092003@gmail.com 
                   </h4>
                </div>
            </div>

            <div className="right">
                <h4>About Us</h4>
                <p>This is me Naresh Kumar. I enjoy discussing new projects and design challenges.</p>
            </div>
            <div className="social">
            <a href='https://www.facebook.com/raghav.khatterwal'><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
            <a href='https://github.com/NareshKumar8740908405'><FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
            <a href='https://www.linkedin.com/in/naresh-kumar-a24b35228/'><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer