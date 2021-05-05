import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import FlickrList from './Components/FlickrList';
import './Components/NavBar';
import './Components/Flickr';
import './Components/NoFlicks';
import './Components/photoContainer';
import './Components/notFound';
//import photoContainer from './Components/photoContainer';
import './Components/NavBar';
//import notFound from './Components/notFound';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      pics: [],
      picsOfHamsters: [],
      picsOfDogs: [],
      picsOfZebras: []
    };
  } 

  componentDidMount() {
    let query = 'cats'
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo
          
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
    let query3 = 'zebras'
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query3}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          picsOfZebras: response.data.photos.photo

        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  

  render() {
    console.log(this.state.pics);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">FlickrSearch</h1>
            <SearchForm /> 
            
            <NavBar />
               
          </div>   
        </div>    
        <div className="main-content">
        </div>
        <FlickrList pics={this.state.pics} />
      </div>
    );
  }
}

