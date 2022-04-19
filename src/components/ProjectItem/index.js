import React from 'react'
import './ProjectItem.scss';
import ModalwithVideo from '../ModalwithVideo';


class ProjectItem extends React.Component { 

  render(){
  return (
  <div className="project-animate">
    <div className="project-inner">   
    <header>     
        <div className="project-top">
          <div className="project-icon"><i className="far fa-folder-open"></i></div>
          <div className="project-links">  
            {(this.props.demoId !== '' && this.props.isVideo)             
             ? 
             <ModalwithVideo videolink={this.props.demoId}></ModalwithVideo>
             : (!this.props.isVideo
              ? <a href={this.props.demoId} target='_blank' rel='noreferrer' className="btn">Live</a>
              : null              
              )                         
            }
            {this.props.github !== '' &&
            <a href={this.props.github} target='_blank' rel='noreferrer' className="btn">Code</a>
            }
          </div>
        </div>
        <h3 className="project-title">{this.props.title}</h3>
        <div className="project-sub">
          <p>{this.props.info}</p>
        </div>
      </header>  
      <footer>
        <ul className="project-tech">
        {this.props.tech.map((value,index) => {
          return <li className='project-used' key={index}>{value}</li>        
          })}
        </ul>
      </footer>          
    </div>
  </div>
  );
}
}

export default ProjectItem;
