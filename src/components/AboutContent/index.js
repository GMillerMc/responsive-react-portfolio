import "./index.css"

import React from 'react'
import { Link } from "react-router-dom"

import ContactBg1 from "../../assets/images/contactbg1.jpg"
import ContactBg2 from "../../assets/images/contactbg2.jpg"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I</h1>
                <p>I'm an ambitious and hardworking individual looking for my first role in Tech. Over the past 12 weeks I have been given an opportunity to immerse myself in the the industry and learned about the tools needed in the modern environment. It goes without saying I cannot wait to get going and further enhance my knowledge and skills. </p>
                <p>My experiences in life to date have given me a different perspective as I do not come from a traditional route, however I believe this will only benefit the company I work for, it is good to have a wide array of voices as the industry we are in touches a wide range of people. </p>
                <p> Outside of coding I am a big fan of music, especially electronic music. Click on the sidebar links and have a listen to one of my mixes on Soundcloud or Mixcloud. Although, this has taken a backseat as I've embarked on my coding journey, there will be more coming soon. My other great passion is football and I regularly follow the best team in London, Chelsea!</p>
                <p>If you like what you have seen and read then please don't hesitate to get in touch to find out more.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={ContactBg1} className="img" alt="a keyboard" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={ContactBg2} className="img" alt="code on a screen" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
