import React from 'react'
import './NavBarComp.css'
import { Link } from 'react-router-dom'

const NavBarComp = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div>
                    <Link to='/' className='logo-link'><h1>Weather App</h1></Link>
                </div>
        
                <div className='link-container'>
                    <Link to='about' className='about-link'><h3>About</h3></Link>
                    <Link to='contact' className='contact-link'><h3>Contact</h3></Link>
                </div>
                
            </div>

        </nav>
    )
}

export default NavBarComp