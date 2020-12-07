import React from 'react';
import classes from './card.module.css';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Card = (props) =>{
    let Actors,Producers,Directors,Writer,genres
    if(props.data){ 
        Actors = props.data.credits.cast.sort((a, b) =>
            (b.popularity - a.popularity)).slice(0, 4).map(actor => {
                return <p key={actor.id}>{actor.name}</p>
            });

        Producers = props.data.credits.crew.filter(el => {
            return el.job === 'Producer'
        }).map(producer => {
            return <p key={producer.id}>{producer.name}</p>
        });

        Directors = props.data.credits.crew.filter(el => {
            return el.job === 'Director'
        }).map(director => {
            return <p key={director.id}>{director.name}</p>
        });
        Writer = props.data.credits.crew.filter(el => {
            return el.job.includes('Writer');
        }).map(writer => {
            return <p key={writer.id}>{writer.name}</p>
        })
        if(props.data.genres.length==0){
            genres=null;
        }
        else if(props.data.genres.length<2){
            genres = props.data.genres[0].name;
        }
        else{
            genres = props.data.genres[0].name + ' & ' + props.data.genres[1].name;
        }
    }
    let style ={
        transform:!props.showCard?'translateY(-200vh)':'translateY(0)'
    }
    return (
        props.data?
        <div 
          className={classes.card}
          style={style}>
            <div className={classes.namenrating}>
                <div className={classes.namerate}>
                    <h1>{props.data.title}</h1>
                    <p><span>{props.data.vote_average}</span>/10</p>
                </div>
                    <p className={classes.genre}>{genres}</p>
            </div>
            <div className={classes.imgcreditaboutcont}>
                <div className={classes.imageBudget}>
                  <img src={IMGPATH+props.data.poster_path} alt={props.data.name}/>
                    <div className={classes.budget}>
                        <p>Budget:</p>
                        <p>${props.data.budget}</p>
                    </div>
                </div>
                <div className={classes.creditnaboutsec}>
                    <button 
                            className={classes.trailerbtn}><a href={props.trailerId?`https://www.youtube.com/watch?v=${props.trailerId}`:'/'}>See trailer</a></button>
                    <div className={classes.about}>
                        <h3>About the Movie</h3>
                        <p>{props.data.overview}</p>
                    </div>
                    <div className={classes.credits}>
                        <div className={classes.actors}>
                            <h3>Actors</h3>
                             {Actors}
                        </div>
                        <div className={classes.Director}>
                            <h3>Director</h3>
                                {Directors}
                        </div>
                        <div className={classes.producer}>
                            <h3>Producers</h3>
                              {Producers}
                        </div>
                        <div className={classes.screenWriter}>
                            <h3>ScreenWriter</h3>
                            <p>Rian johnson</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :null
    );
}

export default Card;