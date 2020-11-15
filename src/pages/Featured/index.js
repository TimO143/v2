import React from 'react'
import './Featured.scss'

function Featured(){
    return (
        <section id='featured' className='featured-container'>
            <div className='title'>
                <p>Featured projects</p>  
                <hr className='divider'></hr>           
            </div>            
            <div className='featured-content'>
                <p>Misschien nog een showcase met image erbij voor 1 project.</p>
            </div> 
             
        </section>
    )
}

export default Featured
