import React from 'react'
import './About.css'

const About = () => {
    return (
        <div>
            <h1>About this App</h1>
            <p className='detail'>This is a simple weather app that I built using data from a weather API named  
                <a href='https://openweathermap.org/api' target='_blank' rel="noopener noreferrer"> Open Weather Map </a> 
                the purpose of this app is to display realtime weather data.
            </p>
        </div>
    )
}

export default About