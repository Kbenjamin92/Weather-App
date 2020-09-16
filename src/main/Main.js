import React, {useContext, useState} from 'react'
import './Main.css'
import { DataContext } from '../context/Context'
import { MDBInput } from 'mdbreact'
import { MDBBtn } from "mdbreact";


const Main = () => {
    const { getRequest, temp, feelsLike, humidity  } = useContext(DataContext)
    const [ renderData, setRenderData ] = useState(false)

    const handleWeatherData = () => {
        setRenderData(true)
        getRequest()
    }

    return (
        <main className='top-container'>
            <MDBInput label="Search..." />
            <div>
                <h1>Check Your Current Weather!</h1>
                <p>Real Time weather data at your finger tips!</p>
                <MDBBtn color="elegant" onClick={handleWeatherData}>Weather Data</MDBBtn>
                {renderData ?  
                    <div>
                        <p>Temperature: <strong>{temp}</strong> Degrees</p>
                        <p>Feels Like:  <strong>{feelsLike}</strong> Degrees</p>
                        <p>Humidity:  <strong>{humidity}</strong></p>
                    </div>
                    : null
                }
            </div>
            
        </main>
    )
}

export default Main