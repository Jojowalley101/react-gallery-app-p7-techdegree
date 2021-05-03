import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import SearchForm from './SearchForm';
import FlickrList from './FlickrList';
import { Flickrs } from "./Flickrs";

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: false
    };
  }

  
  // componentDidMount() {
  //   this.performSearch();
  // }

  // performSearch = (query = 'cats') => {
  //   fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  //   .then(response => {
  //       this.setState({
  //         pictures: response.photos.photo,
  //         loading: true
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

  render() {
  return (
    
      <div>
        <div className="main-header">
        <div className="inner">
        <h1 className="main-title">FlickrSearch</h1>
          <Flickrs />
      {/* <div className="main-content">
        {
          (this.state.loading)
            ? <p>Loading...</p>
            : <FlickrList data={this.state.pictures} />
        }
      
      </div> */}
    </div>
    </div>
    </div>
  
  );
          }
        }
      
export default App;


