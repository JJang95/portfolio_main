import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>HTML</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>CSS</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>JavaScript</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Bootstrap</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Angular</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>React</h4>
                        </article>
                    </div>
                </div>
                <div className="backend">
                <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Java</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>SQL</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Mongodb</h4>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <h4>Node.js</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience