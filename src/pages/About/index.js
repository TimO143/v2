import React from 'react'
import './About.scss'
import profiel from './../../assets/images/profiel_foto.png'

function About(){
    return (
        <section id='about' className='about-container'> 
                      
            <div className='title'>
                <p>background</p>    
                <hr className='divider'></hr>        
            </div>
        <div className='about-wrapper'> 
            <img className='about-profiel' src={profiel}></img>
            <div className='about-content'>
                 <p>veel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaast</p>
                 <p>veel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaastveel tekst hier ernaast</p>
                  
            </div>    
                    
        </div> 

             
        </section>
    )
}

export default About
