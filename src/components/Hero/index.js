import React from 'react'
import './Hero.scss';

function Hero() {
  return (
    <div id='home' className='hero-container'>   
      <h1 className='hero-title'>Tim Oosterlee</h1>
      <p className='hero-subtitle'>Software Engineer</p>   
      <div className="arrow">                
                <span></span>  
      </div>  
    </div>      
  );
}

export default Hero;