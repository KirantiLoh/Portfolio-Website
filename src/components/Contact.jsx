import { useState } from "react"
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const successCardRef = useRef()
    const failCardRef = useRef()

    let handleSubmit = (e) => {
        e.preventDefault()
        if(name && email && message) {
            emailjs.sendForm('service-kirantiloh','template_dy7j0k7', e.target , 'user_OYUf1eDui1cL9YUTBL4lG')
            .then((result) => {
                successCardRef.current.style.transform = "translateY(-50%) rotateY(0deg)"
                setTimeout(() => successCardRef.current.style.transform = "translateY(-50%) rotateY(90deg)", 2000)
            }, (error) => {
                failCardRef.current.style.transform = "translateY(-50%) rotateY(0deg)"
                setTimeout(() => failCardRef.current.style.transform = "translateY(-50%) rotateY(90deg)", 2000)
            })
        }
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div id='contact-me'>
            <div className="contact-container">
            <h1 className="title">Contact Me</h1>
                <form  className="contact-form" onSubmit={e => handleSubmit(e)} autoComplete='off'>
                   <input type="text" value={name} onChange={e => setName(e.target.value)} id='id_name' name="name" placeholder='Name'/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="id_email" name="email" placeholder='Email' />
                    <textarea id="id_message" value={message} onChange={e => setMessage(e.target.value)} name="message" cols="30" rows="10" placeholder='Message'></textarea>
                    <button type="submit" className='send-message-btn' disabled={!name && !email && !message}>Send Message</button>
                </form>

            </div>
            <div className="success-card" ref={successCardRef}>
                <h1><FontAwesomeIcon icon={faCheckCircle} /></h1>
                <p>Your message have been sent! I will contact you shortly</p>
            </div>
            <div className="fail-card" ref={failCardRef}>
                <h1><FontAwesomeIcon icon={faTimesCircle} /></h1>
                <p>Something went wrong... Please try again</p>
            </div>
        </div>
    )
}

export default Contact
