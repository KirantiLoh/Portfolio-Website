import React, { useRef, useState } from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTasks, faConciergeBell, faUser, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const navlinkRef = useRef()

    const [headerClass, setheaderClass] = useState("navbar")
    const [navlinkOpened, setnavlinkOpened] = useState(false)

    window.onscroll = () => {
        if (window.scrollY >= 600) {
            setheaderClass('navbar-sticky')
        } else {
            setheaderClass('navbar')
        }
    }

    let handleBurgerClick = () => {
        if (!navlinkOpened) {
            navlinkRef.current.style.right = '0'
            setnavlinkOpened(true)
        }
        else {
            navlinkRef.current.style.right = '-150%';
            setnavlinkOpened(false)
        }
    }

    return (
        <header className={headerClass}>
            <h1 className="logo">
                <a href="#home">
                    <img src={logo} alt="Maurice Yang" />
                    Maurice <span>Yang</span> 
                </a>
            </h1>
            <ul className="navlinks" ref={navlinkRef}>
                <h1 className="logo">
                    <a href="#home" onClick={() => handleBurgerClick()}>
                        <img src={logo} alt="Maurice Yang" />
                        Maurice <span>Yang</span> 
                    </a>
                </h1>
                <li>
                    <a href="#about" onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faUser}/> About Me</a>
                </li>
                <li>
                    <a href="#services" onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faConciergeBell}/> Services</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => handleBurgerClick()}><FontAwesomeIcon icon={faTasks}/> Projects</a>
                </li>
                    <a href="#contact-me" onClick={() => handleBurgerClick()} id="contact-header-btn"><FontAwesomeIcon icon={faEnvelope}/> Contact Me</a>
                <li className="burger" onClick={() => handleBurgerClick()}>
                    <h1 className="close-nav">
                        <FontAwesomeIcon icon={faTimes}/>
                    </h1>
                </li>
                
            </ul>
            <div className="burger" onClick={() => handleBurgerClick()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}

export default Header
