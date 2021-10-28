import React,{Component} from 'react';
import Movie from './Movie/Movie';
import classes from './Movies.module.css';
import MovieSection from './MovieSection/MoviesSection';
import Loader from '../UI/Loader/Loader';
import Pagination from '../Pagination/Pagination'

const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

const Movies =(props)=>{    
        console.log(props) 
        let allMovies = props.allmovies.map(movie => {
            let poster = movie.poster_path ? movie.poster_path : movie.backdrop_path
            return poster===null?null:<Movie
                imageSrc={IMGPATH + poster}
                movieName={movie.title}
                movieRating={movie.vote_average}
                key={movie.id}
                id ={movie.id}
                clicked = {props.showCardHandler}
            />
        })
        if(allMovies.length===0){
            allMovies = <p className={classes.Nothing}>Nothing To Show</p>
        }
        let style={
            flexWrap:props.showContainer?'wrap':'no-wrap',
            justifyContent:props.showContainer?'center':'none'
        }
        return (
            <div className={classes.MoviesCont}>
                {props.showContainer ?
                    <button
                        className={classes.btn}
                        onClick={props.backButtonHandler}>
                        <i className='fas fa-arrow-left'></i>
                    </button> : null}
                 {
                props.showLoader?<Loader />:
                <div>
                    {props.showContainer ? null : <MovieSection type={props.type} seeAllClicked={props.seeAllClicked}/>}
                    <div style={style} className={classes.Movies}>
                        {allMovies}
                    </div>
                    {props.showContainer?<Pagination type={props.type} pageNoClicked = {props.pageNoClicked} totalPages={props.totalPages}/>:null}
                </div>
              }
            </div>
        );
}
export default Movies;