import React from 'react'

import "./index.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaSoundcloud, FaMixcloud } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container"> 
                <div className="left">
                    <div className="location">
                        <FaHome  
                            size={20} 
                            style={{ color: "#fff", 
                            marginRight: "2rem" }} 
                        />
                        <div>
                            <p>some text here</p>
                            <p>some text here</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4> 
                            <FaPhone  
                                size={20} 
                                style={{ color: "#fff", 
                                marginRight: "2rem" }} 
                            />
                            phone number
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20} 
                                style={{ color: "#fff", 
                                marginRight: "2rem" }} 
                            />
                            millermccg@gmail.com
                        </h4>
                    </div>
                </div>
                
                <div className="right">
                    <h4>About the company</h4>
                    <p>more info</p>
                    <div className="social">
                        <a target="_blank" 
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/george-miller-mccall-895711169/">
                        <FaLinkedin
                            size={20} 
                            style={{ color: "#fff", 
                            marginRight: "2rem" }} 
                        />
                        </a>
                        <a target="_blank" 
                        rel="noreferrer"
                        href="https://soundcloud.com/mthr33">
                        <FaSoundcloud
                            size={20} 
                            style={{ color: "#fff", 
                            marginRight: "2rem" }} 
                        />
                        </a>
                        <a target="_blank" 
                        rel="noreferrer"
                        href="https://www.mixcloud.com/Gmill%C3%A9/">
                        <FaMixcloud
                            size={20} 
                            style={{ color: "#fff", 
                            marginRight: "2rem" }} 
                        />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
