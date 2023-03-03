import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {TbMap2} from 'react-icons/tb'
import {MdOutlineSchool} from 'react-icons/md'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <MdOutlineSchool className='about__icon' />
                            <h5>Education</h5>
                            <small>Bachelors from New Jersey Institute of Technology</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years of programming</small>
                        </article>

                        <article className='about__card'>
                            <TbMap2 className='about__icon' />
                            <h5>Location</h5>
                            <small>New York Tri State Area</small>
                        </article>
                    </div>

                    <p>
                    Hi there, I'm a full stack developer with two years of experience in building web applications. 
                    I graduated from NJIT back in 2018 and currently based in New York. 
                    With my technical skills and passion for programming, I am eager to take on new challenges.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
