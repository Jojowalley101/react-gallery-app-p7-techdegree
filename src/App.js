import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import FlickrList from './Components/FlickrList';
import NavBar from './Components/NavBar';
import { Route, NavLink, BrowserRouter, Router, Switch } from "react-router-dom";
import Flickr from './Components/Flickr';
import NoFlicks from './Components/NoFlicks';
//import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
//import photoContainer from './Components/photoContainer';
//import './Components/NavBar';
//import notFound from './Components/notFound';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      pics: [],
      picsOfHamsters: [],
      picsOfDogs: [],
      picsOfSearch: [],
      picsOfCats: [],
      loading: true
    };
  }
  
  handleClick() {
    FlickrList(this.state.pics);
    console.log(FlickrList(this.state.pics));
  }

  
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false

        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  componentDidMount() {
    let query0 = 'cats'
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query0}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          picsOfCats: response.data.photos.photo
          
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    let query1 = 'dogs'
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query1}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          picsOfDogs: response.data.photos.photo

        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    let query2 = 'hamsters'
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query2}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          picsOfHamsters: response.data.photos.photo

        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    let query3 = ''
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query3}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          picsOfSearch: response.data.photos.photo

        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  

  render() {
    console.log(this.state.pics);
    return (
      <BrowserRouter>
      
        <div className="container">
          
            <h1 className="main-title">Flickr Search</h1>
            <SearchForm onSearch={this.performSearch} /> 
          <NavBar />
          
          <Switch>
            
          
            <Route path='/cats' render={() => <FlickrList pics={this.state.picsOfCats} />} />

           

            <Route path='/dogs' render={() => <FlickrList pics={this.state.picsOfDogs} />} />
  
            <Route path='/hamsters' render={() => <FlickrList pics={this.state.picsOfHamsters} />}/>
            {
              (this.state.loading)
                ? <p>Loading...</p>
                : 
            <Route path='/search' render={() => <FlickrList pics={this.state.pics} />} />

            }
            
          <Route NotFound/> 
          
           
          

            
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}





//only will show cats :(

// render() {
//   console.log(this.state.pics);
//   return (
//     <div className="container">

//       <h1 className="main-title">Flickr Search</h1>
//       <SearchForm />
//       <FlickrList pics={this.state.pics}>
//         <NavLink to={this.state.pics}>
//         </NavLink>
//       </FlickrList>

//     </div>
//   );
// }
// }
