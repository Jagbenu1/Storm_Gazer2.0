import React from 'react';
import classes from './Temperature.module.css';

const temp = (props) => {
    return (
        <p className={classes.Temperature}>{Math.round(props.temp)}&deg;F</p>
    )
}

export default temp;