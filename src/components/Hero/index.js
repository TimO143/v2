import React from 'react'
import './Hero.scss';

function Hero() {
  return (
    <div id='home' className='hero-container'>   
      <h1 className='hero-title'>Tim Oosterlee</h1>
      <p className='hero-subtitle'>Developer</p>   
      <div class="arrow">                
                <span></span>
                {/* <span></span>
                <span></span> */}
  
      </div>  
    </div>      
  );
}

export default Hero;
