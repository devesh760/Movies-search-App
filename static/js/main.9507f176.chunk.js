(this.webpackJsonpdummy=this.webpackJsonpdummy||[]).push([[0],[,function(e,t,a){e.exports={card:"card_card__1PvOV",namenrating:"card_namenrating__1fbqH",namerate:"card_namerate__2cnEr",genre:"card_genre__Hzeqp",imgcreditaboutcont:"card_imgcreditaboutcont__1g0ih",imageBudget:"card_imageBudget__3FkrP",budget:"card_budget__1ucXm",creditnaboutsec:"card_creditnaboutsec__338G5",about:"card_about__2O3oe",credits:"card_credits__2hpfB",screenWriter:"card_screenWriter__1LFgh",actors:"card_actors__1Ue-y",trailerbtn:"card_trailerbtn__2oWmd"}},,function(e,t,a){e.exports={MoviesCont:"Movies_MoviesCont__1CrPj",btn:"Movies_btn__isdQd",Movies:"Movies_Movies__LaIeT",Nothing:"Movies_Nothing__AcNZC"}},,,,,,,function(e,t,a){e.exports={Pagination:"Pagination_Pagination__13PUG",outerCont:"Pagination_outerCont__pzFwA"}},,,function(e,t,a){e.exports={Layout:"Layout_Layout__3XWY9"}},function(e,t,a){e.exports={Toolbar:"toolBar_Toolbar__9nohq"}},function(e,t,a){e.exports={Movie:"Movie_Movie__1yLPf"}},function(e,t,a){e.exports={MovieSection:"MovieSection_MovieSection__1T9EQ"}},function(e,t,a){e.exports={ldsSpinner:"Loader_ldsSpinner__3nEB5","lds-spinner":"Loader_lds-spinner__2XqYM"}},function(e,t,a){e.exports={para:"PageNo_para__24l_P"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,a){e.exports={container:"allMoviesContainer_container__2BDaH"}},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=a(4),c=a(5),s=a(7),u=a(6),d=a(13),m=a.n(d),p=function(e){return r.a.createElement("div",{className:m.a.Layout},e.children)},h=a(14),v=a.n(h),f=function(e){return r.a.createElement("div",{className:v.a.Toolbar},r.a.createElement("div",null,r.a.createElement("p",{onClick:e.reload},"Movies\ud83d\ude80")),r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{id:"search",placeholder:"Search"})))},g=a(21),_=a(2),E=a.n(_),y=a(8),b=a(9),k=a(15),C=a.n(k),w=function(e){return r.a.createElement("div",{className:C.a.Movie},r.a.createElement("img",{loading:"lazy",src:e.imageSrc,alt:e.imgAlt,onClick:function(){return e.clicked(e.id)}}),r.a.createElement("div",null,r.a.createElement("p",null,e.movieName),r.a.createElement("p",null,e.movieRating)))},N=a(3),S=a.n(N),B=a(16),M=a.n(B),D=function(e){return r.a.createElement("div",{className:M.a.MovieSection},r.a.createElement("p",null,e.type),r.a.createElement("button",{onClick:function(){return e.seeAllClicked(e.type)}},"See all",r.a.createElement("i",{className:"fas fa-caret-right"})))},H=a(17),O=a.n(H),P=function(e){return r.a.createElement("div",{className:O.a.ldsSpinner},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},j=a(18),L=a.n(j),x=function(e){return r.a.createElement("p",{className:L.a.para,onClick:function(){return e.clicked(e.type,e.number)}},e.number)},A=a(10),I=a.n(A),J=function(){document.querySelectorAll("#Pagination")[0].scrollLeft-=200},F=function(){document.querySelectorAll("#Pagination")[0].scrollLeft+=200},T=function(e){for(var t=[],a=0;a<e.totalPages;++a)t.push(r.a.createElement(x,{clicked:e.pageNoClicked,type:e.type,key:a+1,number:a+1}));return r.a.createElement("div",{className:I.a.outerCont},r.a.createElement("button",{onClick:J},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",{id:"Pagination",className:I.a.Pagination},t),r.a.createElement("button",{onClick:F},r.a.createElement("i",{className:"fas fa-chevron-right"})))},W=function(e){var t,a=null===(t=e.allmovies)||void 0===t?void 0:t.map((function(t){var a=t.poster_path?t.poster_path:t.backdrop_path;return null===a?null:r.a.createElement(w,{imageSrc:"https://image.tmdb.org/t/p/w185/"+a,movieName:t.title,movieRating:t.vote_average,key:t.id,id:t.id,clicked:e.showCardHandler})}));if(!a)return null;0===a.length&&(a=r.a.createElement("p",{className:S.a.Nothing},"Nothing To Show"));var n={flexWrap:e.showContainer?"wrap":"no-wrap",justifyContent:e.showContainer?"center":"none"};return r.a.createElement("div",{className:S.a.MoviesCont},e.showContainer?r.a.createElement("button",{className:S.a.btn,onClick:e.backButtonHandler},r.a.createElement("i",{className:"fas fa-arrow-left"})):null,e.showLoader?r.a.createElement(P,null):r.a.createElement("div",null,e.showContainer?null:r.a.createElement(D,{type:e.type,seeAllClicked:e.seeAllClicked}),r.a.createElement("div",{style:n,className:S.a.Movies},a),e.showContainer?r.a.createElement(T,{type:e.type,pageNoClicked:e.pageNoClicked,totalPages:e.totalPages}):null))},q=a(1),K=a.n(q),Y=function(e){var t,a,n,o,l={transform:e.showCard?"translateY(0)":"translateY(-200vh)"};if(!e.data)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.card,style:l},r.a.createElement(P,null)));var i=e.data,c=i.credits,s=i.genres;return e.data&&(t=c.cast.sort((function(e,t){return t.popularity-e.popularity})).slice(0,4).map((function(e){return r.a.createElement("p",{key:e.id},e.name)})),a=c.crew.filter((function(e){return"Producer"===e.job})).map((function(e){return r.a.createElement("p",{key:e.id},e.name)})),n=c.crew.filter((function(e){return"Director"===e.job})).map((function(e){return r.a.createElement("p",{key:e.id},e.name)})),c.crew.filter((function(e){return e.job.includes("Writer")})).map((function(e){return r.a.createElement("p",{key:e.id},e.name)})),o=0===s.length?null:s.length<2?s[0].name:s[0].name+" & "+s[1].name),e.data?r.a.createElement("div",{className:K.a.card,style:l},r.a.createElement("div",{className:K.a.namenrating},r.a.createElement("div",{className:K.a.namerate},r.a.createElement("h1",null,e.data.title),r.a.createElement("p",null,r.a.createElement("span",null,e.data.vote_average),"/10")),r.a.createElement("p",{className:K.a.genre},o)),r.a.createElement("div",{className:K.a.imgcreditaboutcont},r.a.createElement("div",{className:K.a.imageBudget},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185"+e.data.poster_path,alt:e.data.name}),r.a.createElement("div",{className:K.a.budget},r.a.createElement("p",null,"Budget:"),r.a.createElement("p",null,"$",e.data.budget))),r.a.createElement("div",{className:K.a.creditnaboutsec},r.a.createElement("button",{className:K.a.trailerbtn},r.a.createElement("a",{href:e.trailerId?"https://www.youtube.com/watch?v=".concat(e.trailerId):""},"See trailer")),r.a.createElement("div",{className:K.a.about},r.a.createElement("h3",null,"About the Movie"),r.a.createElement("p",null,e.data.overview)),r.a.createElement("div",{className:K.a.credits},r.a.createElement("div",{className:K.a.actors},r.a.createElement("h3",null,"Actors"),t),r.a.createElement("div",{className:K.a.Director},r.a.createElement("h3",null,"Director"),n),r.a.createElement("div",{className:K.a.producer},r.a.createElement("h3",null,"Producers"),a),r.a.createElement("div",{className:K.a.screenWriter},r.a.createElement("h3",null,"ScreenWriter"),r.a.createElement("p",null,"Rian johnson")))))):null},z=a(19),R=a.n(z),X=function(e){return r.a.createElement("div",{style:{display:e.showBackdrop?"block":"none"},className:R.a.Backdrop,onClick:e.clicked})},G=a(20),Q=a.n(G),U="https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=hi-india&sort_by=popularity.desc&certification_country=india&include_adult=false&include_video=false&page=1&primary_release_year=2019&with_original_language=hi",V="http://api.themoviedb.org/3/movie/157336/videos?api_key=04c35731a5ee918f014970082a0088b1",Z="&&api_key=04c35731a5ee918f014970082a0088b1",$="https://api.themoviedb.org/3/movie/150540?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=credits",ee="discover/movie?primary_release_year=2020&sort_by=vote_average.desc",te="https://api.themoviedb.org/3/",ae="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1",ne="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=",re=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Data:[],showCard:!1,MovieDetails:null,showBackdrop:!1,trailerKey:null,showContainer:!1,showLoader:!1,toSearch:null},e.buttonClickHandler=function(t){var a=$.replace("150540",t);e.setState({MovieDetails:null}),e.setState({showCard:!0,showBackdrop:!0}),e.HttpsCall(a).then((function(t){e.setState({MovieDetails:t})})),e.setState({trailerKey:null});var n=V.replace("157336",t);e.HttpsCall(n).then((function(t){void 0!==t.results[0]&&e.setState({trailerKey:t.results[0].key})}))},e.searchHandler=function(t){t.preventDefault();var a=t.target[0].value;a&&(e.setState({toSearch:a}),e.HttpsCall(ne+a).then((function(t){e.setState({showContainer:!0}),e.updatestateBythisData("Searched",t,!0)})))},e.removeBackdrop=function(){e.setState({showBackdrop:!1,showCard:!1})},e.backButtonHandler=function(){e.setState({showContainer:!1}),e.state.Data.pop(),e.addDataOnLoad()},e.seeAllButtonHandler=function(t){var a=["Best of 2020"===t?Object(b.a)({},e.state.Data[0]):"Popular Movies"===t?Object(b.a)({},e.state.Data[1]):Object(b.a)({},e.state.Data[2])];e.setState({showContainer:!0}),e.setState({Data:a})},e.pageNoClicked=function(t,a){switch(t){case"Best of 2020":var n=sessionStorage.getItem(t+a);null===n?e.HttpsCall(te+ee+Z+"&page=".concat(a)).then((function(n){e.updatestateBythisData(t,n,!0),sessionStorage.setItem(t+a,JSON.stringify(n))})):e.updatestateBythisData(t,JSON.parse(n),!0);break;case"Popular Movies":var r=sessionStorage.getItem(t+a);null===r?e.HttpsCall(ae+"&page=".concat(a)).then((function(n){e.updatestateBythisData(t,n,!0),sessionStorage.setItem(t+a,JSON.stringify(n))})):e.updatestateBythisData(t,JSON.parse(r),!0);break;case"Best of Bollywood":var o=sessionStorage.getItem(t+a);if(null===o){var l=U.replace("page=1","page=".concat(a));e.HttpsCall(l).then((function(n){e.updatestateBythisData(t,n,!0),sessionStorage.setItem(t+a,JSON.stringify(n))}))}else e.updatestateBythisData(t,JSON.parse(o),!0);break;default:var i=sessionStorage.getItem(t+a+e.state.toSearch);null===i?e.HttpsCall(ne+e.state.toSearch+"&&page=".concat(a)).then((function(n){e.updatestateBythisData("Searched",n,!0),sessionStorage.setItem(t+a+e.state.toSearch,JSON.stringify(n))})):e.updatestateBythisData(t,JSON.parse(i),!0)}window.scrollTo(0,0)},e.refreshHandler=function(e){console.log("not working currently ... ")},e}return Object(c.a)(a,[{key:"HttpsCall",value:function(){var e=Object(y.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.addDataOnLoad();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addDataOnLoad",value:function(){var e=Object(y.a)(E.a.mark((function e(){var t,a,n,r,o,l,i,c=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>0&&void 0!==c[0]&&c[0],c.length>1&&void 0!==c[1]&&c[1],c.length>2&&void 0!==c[2]&&c[2],this.setState({showLoader:!0}),t=Math.floor(1e3*Math.random()%500),a=Math.floor(1e3*Math.random()%500),n=Math.floor(1e3*Math.random()%10),e.next=9,this.HttpsCall(te+ee+Z+"&page=".concat(a));case 9:return r=e.sent,this.updatestateBythisData("Best of 2020",r),e.next=13,this.HttpsCall(ae+"&page=".concat(t));case 13:return o=e.sent,this.updatestateBythisData("Popular Movies",o),l=U.replace("page=1","page=".concat(n)),e.next=18,this.HttpsCall(l);case 18:i=e.sent,this.updatestateBythisData("Best of Bollywood",i),this.setState({showLoader:!1});case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updatestateBythisData",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={type:e,MoviesData:t.results,totalPages:t.total_pages},r=[];!1===a?(r=Object(g.a)(this.state.Data)).push(n):r.push(n),this.setState({Data:r})}},{key:"render",value:function(){var e,t,a,n=this;return a=null===(e=this.state)||void 0===e||null===(t=e.Data)||void 0===t?void 0:t.map((function(e,t){return r.a.createElement(W,{type:e.type,allmovies:e.MoviesData,key:t,showCardHandler:n.buttonClickHandler,showContainer:n.state.showContainer,backButtonHandler:n.backButtonHandler,showLoader:n.state.showLoader,totalPages:e.totalPages,seeAllClicked:n.seeAllButtonHandler,pageNoClicked:n.pageNoClicked})})),r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{showBackdrop:this.state.showBackdrop,clicked:this.removeBackdrop}),r.a.createElement(Y,{showCard:this.state.showCard,data:this.state.MovieDetails,trailerId:this.state.trailerKey}),r.a.createElement("div",{className:Q.a.container},r.a.createElement(f,{reload:this.refreshHandler,submit:this.searchHandler}),a))}}]),a}(n.Component),oe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(re,null))}}]),a}(n.Component),le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),o(e),l(e)}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),le()}],[[27,1,2]]]);
//# sourceMappingURL=main.9507f176.chunk.js.map