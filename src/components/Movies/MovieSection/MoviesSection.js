import React from 'react';
import classes from './MovieSection.module.css';
const MoviesSection = (props) =>(
    <div className={classes.MovieSection}>
       <p>{props.type}</p>
       {/* on Click of this button we will show all the movies of
           that type */}
        <button onClick={()=>props.seeAllClicked(props.type)}>See all<i className="fas fa-caret-right" ></i></button>
    </div>
);

export default MoviesSection;