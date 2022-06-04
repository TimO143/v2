import React from 'react';
import './ArtProjects.scss';
import ArtProjectItem from "../../components/ArtProjectItem"
import ImageArtProjectItem from "../../components/ImageArtProjectItem"
import {artProjectData} from "./ArtProjData"
import {imgArtProjectData} from "./ImgArtProjData"

function ArtProjects() {
  return (
    <section id='art-projects' className='art-project-section'>
    <div className="art-project-container">
    <div className='title'>
        <p>Blender3D Animation Projects</p>  
    </div>
    <div className='divider'></div>  
    <div className="art-projects-grid">
        {artProjectData.map((data) => {                     
            return <>
                <ArtProjectItem                   
                    title= {data.title}
                    demoId={data.demoId}
                    isVideo={data.isVideo}           
                    info={data.info}
                    tech={data.tech}
                />
            </>     
        })}  
        </div>  
        <div className='title'>
        <p>Blender3D Image Projects</p>  
        </div>
        <div className='divider'></div>  
        <div className="art-projects-grid">  
            {imgArtProjectData.map((data) => {                     
                    return <>
                        <ImageArtProjectItem                   
                            title= {data.title}
                            imagepath={data.imagepath}
                            alt={data.alt}           
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

export default ArtProjects;