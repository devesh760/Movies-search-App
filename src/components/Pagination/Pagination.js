import React from 'react'
import Page from '../UI/PageNo/PageNo';
import classes from './Pagination.module.css'
const leftClicked=()=>{
    document.querySelectorAll('#Pagination')[0].scrollLeft-=200;
}
const rightClicked = () => {
    document.querySelectorAll('#Pagination')[0].scrollLeft += 200;
}
const Pagination = (props) =>{
    let pagesToShow =[];
   for(let i=0;i<props.totalPages;++i){
        pagesToShow.push(
            <Page clicked={props.pageNoClicked} type={props.type} key={i+1} number={i+1}/>
        )
   }

    return(
        <div className={classes.outerCont}>
            <button onClick={leftClicked}><i className='fas fa-chevron-left'></i></button>
              <div id='Pagination' className={classes.Pagination}>
                  {pagesToShow}
              </div>
            <button onClick={rightClicked}><i className='fas fa-chevron-right'></i></button>
        </div>
    );
}

export default Pagination ;