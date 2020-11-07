import React from 'react';
import classes from './Location.module.css';

const location = (props) => {
    return (
    <p className={classes.Location}>{props.userCity}, {props.userState}</p>
    );
}

export default location;