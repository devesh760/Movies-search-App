import React from 'react';
import classes from './Movie.module.css';
const Movie = (props) =>(
    <div className={classes.Movie}>
        <img src={props.imageSrc} alt={props.imgAlt} onClick={() => props.clicked(props.id)}/>
        <div>
            <p>{props.movieName}</p>
            <p>{props.movieRating}</p>
        </div>
    </div>
);

export default Movie;