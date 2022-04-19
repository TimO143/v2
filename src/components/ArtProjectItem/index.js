import React from 'react'
import "./ArtProjectItem.scss"
import ModalwithVideo from '../ModalwithVideo';


class ArtProjectItem extends React.Component { 

  render(){
  return (
  <div className="artproject-animate">
    <div className="artproject-inner"> 
    <header>
      <div className="artproject-top">
          <div className="artproject-icon"><i className="fa-solid fa-heart fa-beat"></i></div>
          <div className="artproject-links">  
            {(this.props.demoId !== '' && this.props.isVideo)             
             ? 
             <ModalwithVideo videolink={this.props.demoId}></ModalwithVideo>
             : (!this.props.isVideo
              ? <a href={this.props.demoId} target='_blank' rel='noreferrer' className="btn">Demo</a>
              : null              
              )                         
            }            
          </div>
        </div>
        <h3 className="artproject-title">{this.props.title}</h3>
        <div className="artproject-sub">
          <p>{this.props.info}</p>
      </div>
    </header>   
    <footer>
      <ul className="artproject-tech">
      {this.props.tech.map((value,index) => {
        return <li className='artproject-used' key={index}>{value}</li>        
        })}
      </ul>
    </footer>          
    </div>
  </div>
  );
}
}

export default ArtProjectItem;
