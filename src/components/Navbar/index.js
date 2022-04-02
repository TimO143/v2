import React, { useState} from 'react'
import './Navbar.scss';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar({ sticky }) {
  const [click, setClick] = useState(false);  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <>
    <nav className={sticky ?  "navbar navbar-sticky" : "navbar"}>
      <div className={click ? "navbar-container navbar-black" : "navbar-container"}>
        <Link smooth to="#home" className="navbar-logo" onClick={closeMobileMenu}>
          Tim Oosterlee 
        </Link>       
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars' }/>
        </div>  
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link smooth to='#about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>         
          <li className='nav-item'>
            <Link smooth to='#projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link smooth to='#art-projects' className='nav-links' onClick={closeMobileMenu}>
              Blender3D
            </Link>
          </li>
          <li className='nav-item'>
            <Link smooth to='#contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>              
      </div>
    </nav>
    </>
  );
}

export default Navbar;