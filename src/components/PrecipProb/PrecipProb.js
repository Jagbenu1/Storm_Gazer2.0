import React from 'react';
import classes from './PrecipProb.module.css';

const percentage = num => {
    let newNum = num * 100;
    return newNum;
}

const precipProb = (props) => {
    return (
    <p className={classes.PrecipProb}>Precipitation Probability: {percentage(props.precipProb)}&#x25;</p>
    );
}

export default precipProb;