import React from 'react'
import './About.css'
import nature from '../svg/illistration.svg'

const About = () => {
    return (
        <div className='about-container'>
            <h1>About this App</h1>
            <p className='detail'>This is a simple weather app that I built using data from a weather API named  
                <a href='https://openweathermap.org/api' target='_blank' rel="noopener noreferrer"> Open Weather Map </a> 
                the purpose of this app is to display realtime weather data.
            </p>
            <img src={nature} alt='illistration' className='image'/>
        </div>
    )
}

export default About