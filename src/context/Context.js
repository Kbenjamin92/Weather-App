import React, { useState } from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

export default function DataProvider(props) {
    const initialState = {
        tempCity: 0,
        feelsLikeCity: 0,
        humidityCity: 0,
        tempZip: 0,
        feelsLikeZip: 0,
        humidityZip: 0,
        renderData: false,
        renderCityData: false,
        cityValue: '', 
        zipCode: '',
        userCity: '',
        userZip: ''

    }
    const [ state, setState ] = useState(initialState)
    
    //get weather via zip code
    const handleWeatherData = (zipCode) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=b191411ee016bb7fb43f84f1daa86fca`)
        .then(res => {
            setState( prevState => ({
                ...prevState,
                tempZip: Math.round(res.data.main.temp * 9/5 - 459.67),
                feelsLikeZip: Math.round(res.data.main.feels_like * 9/5 - 459.67),
                humidityZip: res.data.main.humidity,
                renderData: true,
                zipCode: '',
                userZip: zipCode
            }))
           
        })
        .catch(err => console.log(err))
        
      }
    // get weather via city name
    const handleSearch = (usersCity) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${usersCity}&appid=b191411ee016bb7fb43f84f1daa86fca`)
        .then(res => {
            setState( prevState => ({
                ...prevState,
                tempCity: Math.round(res.data.main.temp * 9/5 - 459.67),
                feelsLikeCity: Math.round(res.data.main.feels_like * 9/5 - 459.67),
                humidityCity: res.data.main.humidity,
                renderCityData: true,
                cityValue: '',
                userCity: usersCity
            }))
        })
        .catch(err => console.log(err))
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <DataContext.Provider value={{
            ...state,
            handleWeatherData,
            handleSearch,
            handleChange

        }}>
        { props.children }
        </DataContext.Provider>
    )
}