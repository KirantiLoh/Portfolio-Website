import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import FadeIn from 'react-fade-in/lib/FadeIn'
import HeroImage from '../images/hero-img.png'
import { faInstagram, faLinkedin, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {

    return (
            <FadeIn>
            <div className="hero">
                <div className='intro'>
                    <h3 className="name">
                        Hi! I'm Maurice Yang
                    </h3>
                    <h1 className="heading">
                        Full Stack Web Developer
                    </h1>
                    <p className="desc">
                        I'm a fullstack web developer who specializes in developing websites using React JS and Django, constantly finding a way to improve both my technical skills and teamwork with other people. I'm passionate to learn about all the wonderful new technologies. Had experience in deploying websites both in Heroku and Netlify.
                    </p>
                    <a href="#contact-me" id='contact-me-btn'><FontAwesomeIcon icon={faEnvelope}/> Contact Me</a>
                    <a href="#about" className='secondary-btn'><FontAwesomeIcon icon={faArrowDown}/> Learn More</a>
                </div>
                <div className='photo-and-links'>
                    <div className="photo">
                        <img src={HeroImage} alt="Maurice Yang" />
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/maurice_yang/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.linkedin.com/in/maurice-yang/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/KirantiLoh" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://twitter.com/maurice_yang28" target='_blank'rel='noreferrer'><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://www.youtube.com/channel/UCfOOzfLYugRoJD_-mv9m3pA" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </div>
            </div>
            </FadeIn>
    )
}

export default Hero
