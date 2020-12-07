import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props)=>{
    return (
        <div style={{
                display:props.showBackdrop?'block':'none'
        }}
        className={classes.Backdrop}
        onClick={props.clicked}></div>
    )
}

export default Backdrop;