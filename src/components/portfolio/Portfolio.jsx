import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Personal Portfolio',
        github: 'https://github.com/JJang95/portfolio_main',
        demo: 'https://github.com/JJang95'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Video Game Database',
        github: 'https://github.com/JJang95/video-game-db',
        demo: 'https://github.com/JJang95'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Arknights Wiki',
        github: 'https://github.com/JJang95/Arknights_wiki',
        demo: 'https://github.com/JJang95/Arknights_wiki'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Recipe database',
        github: 'https://github.com/JJang95/Recipe_guide',
        demo: 'https://github.com/JJang95'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key = {id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio