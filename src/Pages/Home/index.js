import React from 'react'
import { default as Navbar } from '../../components/Navbar'
import { default as Heroimg } from '../../components/Heroimg'
import Footer from '../../components/Footer'
import Loader from 'react-loaders';

const Home = () => {
    return (
        <>
        <div>
            <Navbar />
            <Heroimg />
            <Footer />
        </div>
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default Home
