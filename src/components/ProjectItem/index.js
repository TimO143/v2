import React from 'react'
import './ProjectItem.scss';


function ProjectItem(props) {
  return (
  <div className="project-animate">
    <div className="project-inner">          
        <div className="project-top">
          <div className="project-icon"><i class="far fa-folder-open"></i></div>
          <div className="project-links">                
            {props.demo !== '' &&
            <a href={props.demo} target='_blank' rel='noreferrer' className="btn">Demo</a>               
            }
            {props.github !== '' &&
            <a href={props.github} target='_blank' rel='noreferrer' className="btn">Code</a>
            }
          </div>
        </div>
        <h3 className="project-title">{props.title}</h3>
        <div className="project-sub">
          <p>{props.info}</p>
        </div>
      <div>
      <ul className="project-tech">
      {props.tech.map((value,index) => {
        return <li className='project-used' key={index}>{value}</li>        
        })}
      </ul>
      </div>          
    </div>
  </div>
  
  );
}

export default ProjectItem;
