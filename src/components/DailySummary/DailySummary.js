import React from 'react';
import classes from './DailySummary.module.css';

const dailySummary = (props) => {
    return (
        <div className={classes.DailySummary}>
            <p>{props.dailySummary}</p>
        </div>
    )
}

export default dailySummary;