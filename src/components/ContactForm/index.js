import './index.css'

import React from 'react'

const ContactForm = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type="text"></input>
                <label>email</label>
                <input type="text"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <input type="text"></input>
                <textarea rows="6" placeholder="Type your message here" />
                <button className='btn'>Submit</button> 
            </form>
        </div>
    )
}

export default ContactForm
