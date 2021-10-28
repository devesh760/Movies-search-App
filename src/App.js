import React,{Component} from 'react';
import Layout from './Container/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import AllMoviesContainer from './Container/AllmoviesContainer/allMoviesContainer';

class App extends Component{
  render(){
    return(
      <Layout>      
          <AllMoviesContainer />
      </Layout>
    );
  }
}

export default App;
