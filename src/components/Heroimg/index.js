import "./index.css"

import React from "react"
import { Link } from "react-router-dom"

import IntroImg from "../../assets/images/Heroimg.jpg"

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="Introimg"/>
            </div>
            <div className="content">
                <p>HI, I'M GEORGE</p>
                <h1>JUNIOR DEVELOPER</h1>
                <div>
                    <Link to="/projects"
                    className="btn">Projects</Link>
                    <Link to="/contact"
                    className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg
