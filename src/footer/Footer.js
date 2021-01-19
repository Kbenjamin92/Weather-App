import React from 'react'
import './Footer.css'
import {MDBIcon} from 'mdbreact'


const Footer = () => {
    let getDate = new Date()
    let year = getDate.getFullYear()
    return (
        <footer>
            <h4 className='footer-title'>Thank you for viewing my weather app!</h4>
            <p>&#169; {year} Kipp Benjamin</p>
            <a href="https://github.com/Kbenjamin92/Weather-App" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="github" size="2x" className='github'/></a>
            <a href="https://www.linkedin.com/in/kipp-benjamin-524681155/" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="linkedin" size="2x" className='linkedin'/></a>
           
        </footer>
    )
}

export default Footer