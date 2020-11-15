import React from 'react'
import './Contact.scss'

function Contact(){
    return (
        <section id='contact' className='contact-section'> 
        <div className="contact-container">
            <div className='title'>
                <p>Contact</p> 
            </div>           
            <div className='divider'></div>
            <a className='btn btn-contact' href='mailto:timoosterlee1@live.nl'> Neem contact op</a>
        </div>           
        </section>
    )
}

export default Contact
