import React, { useState } from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

export default function DataProvider(props) {
    const initialState = {
        temp: 0,
        feelsLike: 0,
        humidity: 0,

    }
    const [ state, setState ] = useState(initialState)

    const getRequest = () => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?zip=08619,us&appid=b191411ee016bb7fb43f84f1daa86fca')
        .then(res => {
            setState( prevState => ({
                ...prevState,
                temp: Math.round(res.data.main.temp * 9/5 - 459.67),
                feelsLike: Math.round(res.data.main.feels_like * 9/5 - 459.67),
                humidity: res.data.main.humidity
            }))
        })
        .catch(err => console.log(err))
        
      }

    return (
        <DataContext.Provider value={{
            ...state,
            getRequest,

        }}>
        { props.children }
        </DataContext.Provider>
    )
}