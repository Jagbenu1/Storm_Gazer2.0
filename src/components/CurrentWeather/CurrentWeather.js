import React from 'react';
import classes from './CurrentWeather.module.css';
import Sun from '../../assets/weather-icons/Sun.svg';
import Moon from '../../assets/weather-icons/Moon.svg';
import Rain from '../../assets/weather-icons/Cloud-Rain.svg';
import Snow from '../../assets/weather-icons/Cloud-Snow.svg';
import Sleet from '../../assets/weather-icons/Cloud-Hail.svg';
import Wind from '../../assets/weather-icons/Wind.svg';
import Fog from '../../assets/weather-icons/Cloud-Fog.svg';
import Cloudy from '../../assets/weather-icons/Cloud.svg';
import PartlyCloudyDay from '../../assets/weather-icons/Cloud-Sun.svg';
import PartlyCloudyNight from '../../assets/weather-icons/Cloud-Moon.svg';

const currentWeather = (props) => {
    let iconImage = null;
    switch(props.icon){
        case('clear-day'):
            iconImage = Sun;
            break;
        case('clear-night'):
            iconImage = Moon;
            break;
        case('rain'):
            iconImage = Rain;
            break;
        case('snow'):
            iconImage = Snow;
            break;
        case('sleet'):
            iconImage = Sleet;
            break;
        case('wind'):
            iconImage = Wind;
            break;
        case('fog'):
            iconImage = Fog;
            break;
        case('cloudy'):
            iconImage = Cloudy;
            break;
        case('partly-cloudy-day'):
            iconImage = PartlyCloudyDay;
            break;
        case('partly-cloudy-night'):
            iconImage = PartlyCloudyNight;
            break;
        default: 
            iconImage = null;
            break;
    }

    return (
        <div className={classes.CurrentWeather}>
            {iconImage !== null ? <img src={iconImage} alt={props.currentWeather} /> : null}
            <p>{props.currentWeather}</p>
        </div>
    );
};

export default currentWeather;