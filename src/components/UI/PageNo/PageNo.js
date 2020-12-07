import React from 'react';
import classes from './PageNo.module.css';

const PageNo = (props) =>{
    return (
        <p 
        className={classes.para}
        onClick={()=>props.clicked(props.type,props.number)}>
        {props.number}</p>
    );
}

export default PageNo;