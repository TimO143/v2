import React, { Component, useRef } from 'react';
import './ModalwithVideo.scss';
import ModalVideo from 'react-modal-video'


class ModalwithVideo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo 
        channel='youtube' 
        autoplay={true}        
        isOpen={this.state.isOpen} 
        videoId={this.props.videolink} 
        onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal} className="btn">Demo</button>
      </div>
    )
  }
}

export default ModalwithVideo;