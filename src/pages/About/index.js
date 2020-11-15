import React from 'react'
import './About.scss'
import profiel from './../../assets/images/profiel_foto.png'

function About(){
    return (
        <section id='about' className='about-container'>                       
            <div className='title'>
                <p>background</p> 
            </div>           
            <div className='divider'></div>        
            <div className='about-content'>
                <p>Ik ben een vierde jaars Informatica student op de Hogeschool Rotterdam.
                 Ik heb nog niet geen specifieke interesses, maar op dit moment zijn het A.I. en Web development.
                </p>
                <p>Ik houd er van om nieuwe dingen te leren en mijn 
                    kennis te vergroten zodat ik een betere programmeur word.
                </p>
            </div>
        </section>
    )
}

export default About
