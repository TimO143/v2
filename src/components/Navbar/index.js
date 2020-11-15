import React, { useState} from 'react'
import './Navbar.scss';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';




function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
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
          {/* <li className='nav-item'>
            <Link smooth to='#skills' className='nav-links' onClick={closeMobileMenu}>
              Skills
            </Link>
          </li> */}
          <li className='nav-item'>
            <Link smooth to='#projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
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
