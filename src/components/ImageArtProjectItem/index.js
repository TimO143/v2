import React from 'react'
import "./ImageArtProjectItem.scss"
import ModalImage from "react-modal-image";

class ImageArtProjectItem extends React.Component { 
  

  render(){
  return (
  <div className="image-artproject-animate">
    <div className="image-artproject-inner">          
        <div className="image-artproject-top">
          <div className="image-artproject-icon"><i className="fa-solid fa-images"></i></div>         
        </div>
        <h3 className="image-artproject-title">{this.props.title}</h3>
        <ModalImage
          large={this.props.imagepath}
          small={this.props.imagepath}
          alt={this.props.alt}
          hideDownload={true}
        />
        <div className="image-artproject-sub">
          <br></br>
          <p>{this.props.info}</p>
        </div>
      <div>
      <ul className="image-artproject-tech">
      {this.props.tech.map((value,index) => {
        return <li className='image-artproject-used' key={index}>{value}</li>        
        })}
      </ul>
      </div>          
    </div>
  </div>
  );
}
}

export default ImageArtProjectItem;
