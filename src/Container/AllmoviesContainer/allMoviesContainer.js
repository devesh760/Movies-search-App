import React,{Component,} from 'react';
import Movies from '../../components/Movies/Movies';
import Toolbar from '../../components/Toolbar/Toolbar';
import Card from '../../components/Card/card';
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import classes from './allMoviesContainer.module.css';

import {
  BASEURL,
  BESTHINDI,
  BESTOF2020,
  API,
  APIKEY,
  APIURL,
  SEARCHAPI,
  TRAILERAPI,
} from "../../constants/endpoints";


class allMoviesContainer extends Component{
    state={
        Data:[],
        showCard:false,
        MovieDetails:null,
        showBackdrop:false,
        trailerKey:null,
        showContainer:false,
        showLoader:false,
        toSearch:null
    }
    async HttpsCall(URL){
        let responce = await fetch(URL);
        let responceData = await responce.json();
        return responceData  
    }
    async componentDidMount(){
        this.addDataOnLoad()
    } 
    async addDataOnLoad(is1=false ,is2=false,is3=false){
        this.setState({ showLoader: true })
        let a = Math.floor((Math.random() * 1000) % 500);
        let b = Math.floor((Math.random() * 1000) % 500);
        let c = Math.floor((Math.random() * 1000) % 10)
        let Best2020 = await this.HttpsCall(BASEURL + BESTOF2020 + APIKEY + `&page=${b}`);
        this.updatestateBythisData("Best of 2020", Best2020);
        let PopularMovies = await this.HttpsCall(APIURL + `&page=${a}`);
        this.updatestateBythisData("Popular Movies", PopularMovies);
        let bestbolly = BESTHINDI.replace("page=1", `page=${c}`)
        let BestinBollywood = await this.HttpsCall(bestbolly);
        this.updatestateBythisData("Best of Bollywood", BestinBollywood);
        this.setState({ showLoader: false });
    }
    updatestateBythisData(type,Data,is=false){
        let movieData = {
            type: type,
            MoviesData: Data.results,
            totalPages: Data.total_pages
        }
        let tempArr = [];
        if(is===false){   
            tempArr = [...this.state.Data];     
            tempArr.push(movieData);
        }
        else{
            tempArr.push(movieData);
        }
        this.setState({
            Data: tempArr 
        })
    }
     buttonClickHandler = (id) => {
        let api = API.replace("150540", id);
        this.setState({ MovieDetails: null});
        this.setState({
            showCard: true,
            showBackdrop: true,
        })
        this.HttpsCall(api).then(data=>{
            this.setState({ MovieDetails: data })
        });
         this.setState({ trailerKey: null});
         let trailerapi = TRAILERAPI.replace("157336",id);
         this.HttpsCall(trailerapi).then(data=>{
             if (data.results[0]!==undefined)
              this.setState({ trailerKey:data.results[0].key });
         })

    }
    searchHandler=(e)=>{
        e.preventDefault();
        let ToSearch = e.target[0].value
        if(!ToSearch) return;
        this.setState({toSearch:ToSearch})
        this.HttpsCall(SEARCHAPI+ToSearch).then(data=>{
            this.setState({showContainer:true});
            this.updatestateBythisData("Searched",data,true);
        })
    }
    removeBackdrop=()=>{
        this.setState({showBackdrop:false,showCard:false});
    }
    backButtonHandler=()=>{
        this.setState({ showContainer: false});
        this.state.Data.pop();
        this.addDataOnLoad();
    }
    seeAllButtonHandler=(type)=>{
        let newobj={};
        if (type === "Best of 2020"){
              newobj = {
                  ...this.state.Data[0]
              }
        }
        else if (type ==="Popular Movies"){
            newobj = {
                ...this.state.Data[1]
            }
        }
        else{
            newobj = {
                ...this.state.Data[2]
            }
        }
        let newArr = [newobj];
        this.setState({showContainer:true});
        this.setState({Data:newArr});

    }
    pageNoClicked=(type,no)=>{
        switch(type){
            case "Best of 2020":{
                let newData = sessionStorage.getItem(type + no);
                if(newData===null){
                    this.HttpsCall(BASEURL + BESTOF2020 + APIKEY + `&page=${no}`).then(data=>{
                        this.updatestateBythisData(type,data, true);
                        sessionStorage.setItem(type+no,JSON.stringify(data))
                    })
                }else{
                    this.updatestateBythisData(type,JSON.parse(newData),true);
                }
                break;
            }
            case "Popular Movies":{
                let newData = sessionStorage.getItem(type + no);
                if (newData === null) {
                    this.HttpsCall(APIURL + `&page=${no}`).then(data => {
                        this.updatestateBythisData(type, data, true);
                        sessionStorage.setItem(type + no, JSON.stringify(data))
                    })
                } else {
                    this.updatestateBythisData(type, JSON.parse(newData), true);
                }
                break;
            }
            case "Best of Bollywood":{
                let newData = sessionStorage.getItem(type + no);
                if (newData === null) {
                    let bestbolly = BESTHINDI.replace("page=1", `page=${no}`)
                    this.HttpsCall(bestbolly).then(data=>{
                        this.updatestateBythisData(type,data,true);
                        sessionStorage.setItem(type+no,JSON.stringify(data));
                    })
                } else {
                    this.updatestateBythisData(type, JSON.parse(newData), true);
                }
                break;
            }
            default:{
                let newData = sessionStorage.getItem(type + no+this.state.toSearch);
                if(newData===null){
                    this.HttpsCall(SEARCHAPI + this.state.toSearch+`&&page=${no}`).then(data => {
                        this.updatestateBythisData("Searched", data, true);
                        sessionStorage.setItem(type + no + this.state.toSearch, JSON.stringify(data));
                    })
                }
                else{
                    this.updatestateBythisData(type,JSON.parse(newData),true);
                }
            }
        
        }
        window.scrollTo(0, 0);
    }
    refreshHandler =(event)=>{
        console.log('not working currently ... ');
    }
    render(){
        let AllMovies;
            AllMovies = this.state?.Data?.map((el,idx)=>{
                return <Movies 
                type = {el.type} 
                allmovies={el.MoviesData}
                key={idx}
                showCardHandler={this.buttonClickHandler}
                showContainer={this.state.showContainer}
                backButtonHandler={this.backButtonHandler}
                showLoader ={this.state.showLoader}
                totalPages={el.totalPages}
                seeAllClicked = {this.seeAllButtonHandler}
                pageNoClicked = {this.pageNoClicked}
                />
            })
        return (
          <>
            <Backdrop
              showBackdrop={this.state.showBackdrop}
              clicked={this.removeBackdrop}
            />
            <Card
              showCard={this.state.showCard}
              data={this.state.MovieDetails}
              trailerId={this.state.trailerKey}
            />
            <div className={classes.container}>
              <Toolbar
                reload={this.refreshHandler}
                submit={this.searchHandler}
              ></Toolbar>
              {AllMovies}
            </div>
          </>
        );
    }
}

export default allMoviesContainer;