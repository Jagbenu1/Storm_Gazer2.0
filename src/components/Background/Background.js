import React from 'react';
import classes from './Background.module.css';

const Background = ({ children, icon, imageIndex }) => {

    const backgroundSwitch = () => {
        let keys = null;
        let backgroundURL = null;
        
        switch (icon) {
            case ('clear-day'):
                const clearDay = require.context('../../../public/clear-day', true, /\.jpg$/);
                keys = clearDay.keys().map(key => clearDay(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('clear-night'):
                const clearNight = require.context('../../../public/clear-night', true, /\.jpg$/);
                keys = clearNight.keys().map(key => clearNight(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('cloudy'):
                const cloudy = require.context('../../../public/cloudy', true, /\.jpg$/);
                keys = cloudy.keys().map(key => cloudy(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('fog'):
                const fog = require.context('../../../public/fog', true, /\.jpg$/);
                keys = fog.keys().map(key => fog(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('partly-cloudy-day'):
                const partlyCloudyDay = require.context('../../../public/partly-cloudy-day', true, /\.jpg$/);
                keys = partlyCloudyDay.keys().map(key => partlyCloudyDay(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('partly-cloudy-night'):
                const partlyCloudyNight = require.context('../../../public/partly-cloudy-night', true, /\.jpg$/);
                keys = partlyCloudyNight.keys().map(key => partlyCloudyNight(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('rain'):
                const rain = require.context('../../../public/rain', true, /\.jpg$/);
                keys = rain.keys().map(key => rain(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('sleet'):
                const sleet = require.context('../../../public/sleet', true, /\.jpg$/);
                keys = sleet.keys().map(key => sleet(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('snow'):
                const snow = require.context('../../../public/snow', true, /\.jpg$/);
                keys = snow.keys().map(key => snow(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            case ('wind'):
                const wind = require.context('../../../public/wind', true, /\.jpg$/);
                keys = wind.keys().map(key => wind(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
            default:
                const defaultImage = require.context('../../../public/default', true, /\.jpg$/);
                keys = defaultImage.keys().map(key => defaultImage(key));
                backgroundURL = 'url(' + keys[imageIndex] + ')';
                break;
        }
        
        return backgroundURL;
    }

    return (
        
            <div className={classes.Background} style={{ backgroundImage: backgroundSwitch() }}>
                {children}
            </div>
        
    );
}

export default Background;