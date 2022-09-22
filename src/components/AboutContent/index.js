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
                <p>SLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo lectus in nisi sollicitudin tempor. Praesent eget faucibus turpis, et suscipit metus. Fusce ut sagittis dui. Morbi a dapibus est, nec malesuada nibh. Ut molestie facilisis sem. Quisque vitae ornare enim. Nullam consequat faucibus nisi in tristique. Nunc non vehicula risus. Duis ut eleifend lacus.
                </p>
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
