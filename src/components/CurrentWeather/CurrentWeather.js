import React from 'react';
import classes from './CurrentWeather.module.css';
import '../css/weather-icons.min.css';
// import Sun from '../../assets/weather-icons/Sun.svg';
// import Moon from '../../assets/weather-icons/Moon.svg';
// import Rain from '../../assets/weather-icons/Cloud-Rain.svg';
// import Snow from '../../assets/weather-icons/Cloud-Snow.svg';
// import Sleet from '../../assets/weather-icons/Cloud-Hail.svg';
// import Wind from '../../assets/weather-icons/Wind.svg';
// import Fog from '../../assets/weather-icons/Cloud-Fog.svg';
// import Cloudy from '../../assets/weather-icons/Cloud.svg';
// import PartlyCloudyDay from '../../assets/weather-icons/Cloud-Sun.svg';
// import PartlyCloudyNight from '../../assets/weather-icons/Cloud-Moon.svg';

const currentWeather = (props) => {
  let iconImage = null;
  switch (props.icon) {
    case 'clear-day':
      iconImage = 'wi-day-sunny';
      break;
    case 'clear-night':
      iconImage = 'wi-night-clear';
      break;
    case 'rain':
      iconImage = 'wi-rain';
      break;
    case 'snow':
      iconImage = 'wi-snow';
      break;
    case 'sleet':
      iconImage = 'wi-sleet';
      break;
    case 'wind':
      iconImage = 'wi-cloudy-gusts';
      break;
    case 'fog':
      iconImage = 'wi-fog';
      break;
    case 'cloudy':
      iconImage = 'wi-cloudy';
      break;
    case 'partly-cloudy-day':
      iconImage = 'wi-day-cloudy-high';
      break;
    case 'partly-cloudy-night':
      iconImage = 'wi-night-alt-partly-cloudy';
      break;
    default:
      iconImage = null;
      break;
  }

  return (
    <div className={classes.CurrentWeather}>
      {iconImage !== null ? <i className={'wi ' + iconImage}></i> : null}
      <p>{props.currentWeather}</p>
    </div>
  );
};

export default currentWeather;
