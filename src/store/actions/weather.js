import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetchWeatherStart = () => {
    return {
        type: actionTypes.FETCH_WEATHER_START
    }
}

export const fetchWeatherSuccess = (weather, location) => {
    return {
        type: actionTypes.FETCH_WEATHER_SUCCESS,
        weather: weather,
        location: location
    }
}

export const fetchWeatherFail = (error) => {
    return{
        type: actionTypes.FETCH_WEATHER_FAIL,
        error: error
    }
}


export const weather = (zipCode) => {
    const zipCodeKey = 'nksLeBLkqZEiv1iNmcTLWDOsBowje7umXwblWcK1sA4ZLeuNBbHUZ8Dy6MVf6XhG';
    const weatherKey = '9bf38154d44163526b6d34de7eaf9fbb';

    return (dispatch) => {
        dispatch(fetchWeatherStart());
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/${zipCodeKey}/info.json/${zipCode}/degrees`)
            .then((res)=>{
                axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherKey}/${res.data.lat},${res.data.lng}?exclude=hourly,minutely`)
                .then((response)=>{
                    console.log(response.data);
                    console.log(res.data);                   
                    dispatch(fetchWeatherSuccess(response.data, res.data))
                })
                .catch(err => {
                    dispatch(fetchWeatherFail(err));
                    console.log(err);
                })
            })
            .catch(err => {
                dispatch(fetchWeatherFail(err));
                console.log(err);
                
            }

        )
    }
}