import React from 'react';
import './header.css'

function Header() {
  return (
    <div className='header'>
        <nav>
            <img className='logo' src='favicon.ico' alt='Image' />
            <ul>
             <li>Home</li>
             <li>Services</li>
             <li>Portfolio</li>
             <li>About</li>
             <li>Contact</li>
             </ul>
        </nav>
    </div>
  )
}

export default Header;