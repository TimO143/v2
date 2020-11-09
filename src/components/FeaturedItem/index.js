import React from 'react'
import './FeaturedItem.scss';


function FeaturedItem(props) {
  return (
    <div className="featureditem">   
        <div className="featureditem-name"> 
            <a href={props.link} className="featureditem-link" target='_blank' rel='noreferrer' >{props.name}</a>
        </div>
        <p>{props.info}</p>
        <div className='featureditem-used'>
            {props.used.map((value,index) => {
            return <span key={index} className='featureditem-used-item'>{value}</span>        
            })}
        </div>
       
    </div>
      
  );
}

export default FeaturedItem;
