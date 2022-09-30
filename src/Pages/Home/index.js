import React from 'react'
import { default as Navbar } from '../../components/Navbar'
import { default as Heroimg } from '../../components/Heroimg'
import Work from '../../components/Work'
import Footer from '../../components/Footer'
import Loader from 'react-loaders';

const Home = () => {
    return (
        <>
        <div>
            <Navbar />
            <Heroimg />
            <Work />
            <Footer />
        </div>
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default Home
