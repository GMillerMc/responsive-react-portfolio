import React from 'react'

import { default as Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutContent from '../../components/AboutContent'
import HeroImg2 from '../../components/Heroimg2'

const About = () => {
    return (
    <div>
        <Navbar />
        <HeroImg2 />
        <AboutContent />
        <Footer />
    </div>
    )
}

export default About
