import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiLinkedinBoxFill} from 'react-icons/ri'
import {BsTelephoneFill} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fk6dfhg', 'template_dl9nmpq', form.current, 'cU1sUbankDVDSnw45')

            e.target.reset()

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>JJ299@njit.edu</h5>
                        <a href="mailto:JJ299@njit.edu" target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiLinkedinBoxFill className='contact__option-icon'/>
                        <h4>Linkedin</h4>
                        <h5>Jonathan Jang</h5>
                        <a href="https://www.linkedin.com/in/jonathan-jang-08a308168/" target="_blank" rel="noreferrer">Connect with me</a>
                    </article>

                    <article className="contact__option">
                        <BsTelephoneFill className='contact__option-icon'/>
                        <h4>Phone Number</h4>
                        <h5>732-354-9388</h5>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
