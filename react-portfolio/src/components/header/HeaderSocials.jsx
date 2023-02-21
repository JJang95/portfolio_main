import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/jonathan-jang-08a308168/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/JJang95" target="_blank"><FaGithub/></a>
            <a href="" target="_blank"></a>
        </div>
    )
}

export default HeaderSocials