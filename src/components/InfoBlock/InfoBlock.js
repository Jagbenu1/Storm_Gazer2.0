import React from 'react';
import classes from  './InfoBlock.module.css';

const infoBlock = (props) => {
    return (
        <div className={classes.InfoBlock}>
            {props.children}
        </div>
    );

}

export default infoBlock;