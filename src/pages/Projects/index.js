import React from 'react';
import './Projects.scss';
import ProjectItem from "../../components/ProjectItem"
import {projectData} from "./ProjData"

function Projects() {
  return (
    <section id='projects' className='project-section'>
    <div className="project-container">
    <div className='title'>
        <p>Projects</p>  
    </div>
    <div className='divider'></div>  
      <div className="projects-grid">   
        {projectData.map((data) => {                     
          return <>
            <ProjectItem                   
                title= {data.title}
                demoId={data.demoId}
                isVideo={data.isVideo}    
                github={data.github}       
                info={data.info}
                tech={data.tech}
            />
          </>     
          })}   
      </div>       
    </div>
    </section>
  );
}

export default Projects;