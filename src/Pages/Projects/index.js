import React from 'react'

import { default as Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroImg2 from '../../components/Heroimg2'
import Work from '../../components/Work/index.js'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 />
            <Work />
            <Footer />
        </div>
    )
}

export default Projects
