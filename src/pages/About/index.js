import React from 'react'
import './About.scss'
import CV from '../../assets/resume.pdf'

function About(){
    return (
        <section id='about' className='about-section'> 
        <div className="about-container">
            <div className='title'>
                <p>about</p> 
            </div>           
            <div className='divider'></div>        
            <div className='about-content'>
                <p>Ik ben een vierde jaars Informatica student op de Hogeschool Rotterdam.
                 Op dit moment zijn mijn interesses A.I. en Web development.
                </p>
                <p>Ik houd er van om nieuwe dingen te leren en mijn 
                    kennis te vergroten zodat ik een betere programmeur word.
                </p>
            </div>
            <a className='btn ' href={CV} rel='noreferrer' target='_blank'> CV</a>
        </div>           
        </section>
    )
}

export default About
