import React, { useContext } from 'react'
import './Main.css'
import { DataContext } from '../context/Context'
import { MDBInput } from 'mdbreact'
import { MDBBtn } from 'mdbreact'

const Main = () => {
    const { 
        handleWeatherData, 
        handleSearch, 
        tempCity, 
        feelsLikeCity, 
        humidityCity, 
        tempZip, 
        feelsLikeZip, 
        humidityZip,
        renderData,
        renderCityData,
        cityValue, 
        zipCode,
        handleChange,
        userCity,
        userZip
      } = useContext(DataContext)

    return (
        <main>
            <div className='header-container'>
                <h1 className='header-title'>Check Your Current Weather!</h1>
                <p className='sub-header'>Real Time weather data at your finger tips!</p>
            </div>
            <div className='top-container'>
            
            <MDBInput 
                className='city-input'
                label='Search by City...' 
                type='text'
                name='cityValue'
                onChange={handleChange}
                value={cityValue}
                />
            <MDBBtn gradient="blue" onClick={() => handleSearch(cityValue)}>Get Weather by City</MDBBtn>
            { renderCityData ? 
                <div className='city-data'>
                    <h3>{userCity}</h3>
                    <hr/>
                    <p>Temperature: <strong>{tempCity}</strong> Degrees</p>
                    <p>Feels Like:  <strong>{feelsLikeCity}</strong> Degrees</p>
                    <p>Humidity:  <strong>{humidityCity}</strong></p>
                </div>: null
            }

            <MDBInput 
                label='Search by Zip Code...' 
                type='text'
                name='zipCode'
                onChange={handleChange}
                value={zipCode}
                />
          <MDBBtn gradient="blue" onClick={() => handleWeatherData(zipCode)}>Get Weather by Zip Code</MDBBtn>

            <div>
                {renderData ?  
                    <div className='zip-data'>
                        <h3>{userZip}</h3>
                        <hr/>
                        <p>Temperature: <strong>{tempZip}</strong> Degrees</p>
                        <p>Feels Like:  <strong>{feelsLikeZip}</strong> Degrees</p>
                        <p>Humidity:  <strong>{humidityZip}</strong></p>
                    </div> : null  
                }
            </div>
               
            </div>
        </main>
    )
}

export default Main