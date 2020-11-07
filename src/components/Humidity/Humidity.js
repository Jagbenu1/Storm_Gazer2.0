import React from 'react';
import classes from './Humidity.module.css';

const percentage = num => {
    let newNum = num * 100;
    return newNum;
}

const humidity = (props) => {
    return (
    <p className={classes.Humidity}>Humidity: {percentage(props.humidity)}&#x25;</p>
    );
}

export default humidity;