import React from 'react'

import { default as Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroImg2 from '../../components/Heroimg2'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Contact." text="Get in touch" />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact
