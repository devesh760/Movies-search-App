import React from 'react';
import classes from './toolBar.module.css';

const Toolbar = (props) =>{
    return (
        <div className={classes.Toolbar}>
            <div>
                <p>Movies🚀</p>
            </div>
            <form onSubmit={props.submit}>
               <input id='search' placeholder='Search'/>
            </form>
        </div>
    );
}

export default Toolbar;