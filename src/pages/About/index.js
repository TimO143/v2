import React from 'react'
import './About.scss'
import CV from '../../assets/resume.pdf'
import Rubiks from '../../assets/GIF/RubiksCube.gif'

function About({element}){
    return (
        <section id='about' className='about-section'> 
        <div ref={element}className="about-container">
            
            <div className='title'>
                <p>about</p> 
            </div>           
            <div className='divider'></div>        
            <div className='about-content'>
                <div>
                    <p>Ik ben afgestudeerd voor HBO informatica op de Hogeschool Rotterdam.
                    Op dit moment zijn mijn interesses Unity/3D visualisaties, .Net en Blender3D modellen/animaties maken.
                    </p>
                    <p>Ik houd er van om nieuwe dingen te leren en mijn 
                        kennis te vergroten zodat ik een betere software engineer word.
                    </p>
                </div>                
                <div>
                <img className="gif-rubiks"src={Rubiks} alt="rubiks"></img>
                </div>
                
            </div>
            <a className='btn ' href={CV} rel='noreferrer' target='_blank'> CV</a>
        </div>           
        </section>
    )
}

export default About
