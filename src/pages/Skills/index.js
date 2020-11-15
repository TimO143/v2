import React from 'react';
import './Skills.scss';
import CV from '../../assets/resume.pdf'


function Skills() {
  return (
    <section id='skills' className='skills-container'>
    <div className='title'>
        <p>Skills</p>           
    </div>
    <div className='divider'></div>  
    <div className='skills-wrapper'>
      <div className='skills-content'>
        <div className='skills-categorie'>
          <div class='skills-label'>
            Language
          </div>    
        <ul>
          <li>Javascript (ES6)</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>C#</li>
          <li>SQL</li>
          <li>R</li>
        </ul>   
        </div>  
        <div className='skills-categorie'>
          <div class='skills-label'>
            Libraries en Frameworks
          </div>    
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>.Net</li>
          <li>Pygame</li>
        </ul>   
        </div>  
        <div className='skills-categorie'>
          <div class='skills-label'>
            Tools
          </div>    
        <ul>
          <li>Git</li>        
        </ul>   
        </div>  
      </div>      
    </div>
    <a className='btn ' href={CV} rel='noreferrer' target='_blank'> CV</a>
    </section>  

  );
}

export default Skills;
