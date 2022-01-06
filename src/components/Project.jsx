import React from 'react'
import MB3EVoting from '../images/projects/mb3-evoting.jpg'
import ConnectChat from '../images/projects/connect-chat.jpg'
import TSEcom from '../images/projects/ts-ecom.jpg'
import PersonalWebsite from '../images/projects/Personal-Website.png'

const Project = () => {
    return (
        <div id='projects'>
            <h1 className="title">Latest Projects</h1>
            <ul className="projects">
            <li className="project">
                <div className="container">
                        <img src={PersonalWebsite} alt="Maurice Yang's Personal Website" />
                        <h1 className="project-title">Porfolio Website</h1>
                        <p className="desc">Last year, I've made a portfolio website using Django. But that site has some glaring flaws, so I created a new one to replace it. Created using React JS, might migrate it into Next JS to improve SEO</p>
                        <a href="#home" className="visit-site-btn">Visit Site</a>
                        <a href="https://github.com/KirantiLoh/Portfolio-Website" target='_blank' rel='noreferrer' className='secondary-btn'>View source</a>
                    </div>
                </li>
                <li className="project">
                    <div className="container">
                        <img src={ConnectChat} alt="Connect Chat App" />
                        <h1 className="project-title">Connect - Real Time Chat Application</h1>
                        <p className="desc">Connect is a real time chat application created using React JS as the frontend and Django as the backend. Taking inspirations from Discord's Invite based system and Whatsapp customizability, users can create rooms and invite people into the room they had created before. Users can also customize the chat's background with their own custom image. The development took 1 month to complete. I've learned a lot about React and Django REST Framework during the development.</p>
                        <a href="https://connect-chat.netlify.app/" target='_blank' rel='noreferrer' className='visit-site-btn'>Visit Site</a>
                        <a href="https://github.com/KirantiLoh/Django-REST-Framework-React-JS-Chat-App-Frontend-" target='_blank' rel='noreferrer' className='secondary-btn'>View source (Frontend)</a>
                        <a href="https://github.com/KirantiLoh/Django-REST-Framework-React-JS-Chat-Application--Backend-" target='_blank' rel='noreferrer' className='secondary-btn'>View source (Backend)</a>
                    </div>
                </li>
                <li className="project">
                    <div className='container'>
                        <img src={MB3EVoting} alt="Mutiara Bangsa 3 E-Voting Website" />
                        <h1 className="project-title">Mutiara Bangsa 3 E-Voting Website</h1>
                        <p className="desc">This website is custom made for Senior High School of Mutiara Bangsa 3. They asked for a website where students can vote for the candidates of Student Council, Class Representative Assembly, etc. The website is developed by using Django, and it took 1 week to complete. This is the first time I've worked with a real client, the website was used at three occasions, election of Student Council, Class Representative Assembly, and Scout. I was happy to see that one of my creations actually helped.</p>
                        <a href="https://mb3-evoting.herokuapp.com/" target='_blank' rel='noreferrer' className="visit-site-btn">Visit Site</a>
                        <a href="https://github.com/KirantiLoh/PemilihanKetuaOSISMB3" target='_blank' rel='noreferrer' className='secondary-btn'>View source</a>
                    </div>
                </li>
                <li className="project">
                    <div className="container">
                        <img src={TSEcom} alt="TS Ecom" />
                        <h1 className="project-title">TS Ecom - A Funny E Commerce Site</h1>
                        <p className="desc">This was an assignment (Note : The products inside the website may seem absurd, that's because I asked my friends to test out the website)</p>
                        <a href="https://shsxiisci-tsecom.herokuapp.com/" target='_blank' rel='noreferrer' className="visit-site-btn">Visit Site</a>
                        <a href="https://github.com/KirantiLoh/TSECom" target='_blank' rel='noreferrer' className='secondary-btn'>View source</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Project
