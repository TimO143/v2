import React from 'react'
import './ProjectItem.scss';


function ProjectItem(props) {
  return (
    <div className="projectitem">   
        <div className="projectitem-name"> 
            <a href={props.link} className="projectitem-link" target='_blank' rel='noreferrer' >{props.name}</a>
        </div>
        <p>{props.info}</p>
        <div className='projectitem-used'>
            {props.used.map((value,index) => {
            return <span key={index} className='projectitem-used-item'>{value}</span>        
            })}
        </div>
       
    </div>
      
  );
}

export default ProjectItem;
