import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiLinkedinBoxFill} from 'react-icons/ri'
import {BsTelephoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contract__option">
                        <MdOutlineMailOutline/>
                        <h4>Email</h4>
                        <h5>JJ299@njit.edu</h5>
                        <a href="mailto:JJ299@njit.edu" target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contract__option">
                        <RiLinkedinBoxFill/>
                        <h4>Linkedin</h4>
                        <h5>Jonathan Jang</h5>
                        <a href="https://www.linkedin.com/in/jonathan-jang-08a308168/" target="_blank" rel="noreferrer">Connect with me</a>
                    </article>

                    <article className="contract__option">
                        <BsTelephoneFill/>
                        <h4>Phone Number</h4>
                        <h5>732-354-9388</h5>
                    </article>
                </div>

                <form action="">
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
