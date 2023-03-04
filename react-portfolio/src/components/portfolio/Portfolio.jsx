import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="p1" />
                    </div>
                    <h3>Portfolio item</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/JJang95" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://github.com/JJang95" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="p2" />
                    </div>
                    <h3>Portfolio item</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/JJang95" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://github.com/JJang95" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="p3" />
                    </div>
                    <h3>Portfolio item</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/JJang95" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://github.com/JJang95" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="p4" />
                    </div>
                    <h3>Portfolio item</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/JJang95" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://github.com/JJang95" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="p5" />
                    </div>
                    <h3>Portfolio item</h3>
                    <div className="portfolio__item-cta">
                        
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/JJang95" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://github.com/JJang95" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="p6" />
                    </div>
                    <h3>Portfolio item</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/JJang95" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://github.com/JJang95" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio