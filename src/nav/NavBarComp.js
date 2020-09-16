import React from 'react'
import './NavBarComp.css'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'


const NavBarComp = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div>
                    <Link to='/' className='logo-link'><h1 className='logo-link'>Weather App</h1></Link>
                </div>
        
                <div className='link-container'>
                <Link to='about' className='about-link'><h3 className='about-link'><MDBIcon icon="info-circle" size='2x'className='info'/></h3></Link>
                </div>
                
            </div>

        </nav>
    )
}

export default NavBarComp