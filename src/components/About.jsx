import React from 'react'
import AboutImage from '../images/about-img.png'
import Django from '../images/skills/django.png'
import ReactLogo from '../images/skills/react.png'
import HTMLLogo from '../images/skills/html.png'
import CSSLogo from '../images/skills/css.png'
import JSLogo from '../images/skills/js logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagic, faLayerGroup, faServer } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div id="about">
            <h1 className="title">About Me</h1>
            <div className="about-container">
                <img src={AboutImage} alt="Maurice Yang" />
                <div className="descs">
                    <p className="desc">Hi I'm Maurice Yang, and I love creating websites using React JS and Django. Creating websites is one of those things where it seems boring to do but enjoyable once the experience accumulated. I was introduced to programming at 2017, and I love it ever since. Being able to create programs is a satisfying experience and we can see how the program made impact, both to ourself or other people.</p>
                    <p className="desc">Learnt Django at 2019 and I have been experimenting with it ever since. Django makes developing a full stack website really easy with its MVT principles. Recently just touched on React JS and I'm loving it. Its "component" approach are simply remarkable, writing code once and it can be reused anywhere. And its virtual DOM makes rendering the site much faster.</p>
                </div>
                
            </div>
            <h1 className="title">My Skills</h1>
            <div className="skill-container">
                <ul className="skills">
                <li className="skill">
                    <img src={Django} alt="Django Logo" />
                    <p className="desc">Django</p>
                </li>
                <li className="skill">
                    <img src={ReactLogo} alt="React JS Logo" />
                    <p className="desc">React JS</p>
                </li>
                <li className="skill">
                    <img src={HTMLLogo} alt="HTML Logo" />
                    <p className="desc">HTML</p>
                </li>
                <li className="skill">
                    <img src={CSSLogo} alt="CSS Logo" />
                    <p className="desc">CSS</p>
                </li>
                <li className="skill">
                    <img src={JSLogo} alt="JS logo" />
                    <p className="desc">Javascript</p>
                </li>
            </ul>
            </div>
            <div id="services">
            <h1 className="title">Services</h1>
            <ul className="services">
                <li className="service">
                    <h1 className='service-logo'><FontAwesomeIcon icon={faLayerGroup}/></h1>
                    <h1 className="service-title">Fullstack Web Development</h1>
                </li>
                <li className="service">
                    <h1 className="service-logo"><FontAwesomeIcon icon={faMagic}/></h1>
                    <h1 className="service-title">Website Design</h1>
                </li>
                <li className="service">
                    <h1 className="service-logo"><FontAwesomeIcon icon={faReact}/></h1>
                    <h1 className="service-title">Front End Devlopment</h1>
                </li>
                <li className="service">
                    <h1 className="service-logo"><FontAwesomeIcon icon={faServer}/></h1>
                    <h1 className="service-title">Back End Development</h1>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default About
