import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import SearchForm from './SearchForm';
import flickrList from './flickrList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: true
    };
  }
  componentDidMount() {

    // Make a request for a user with a given ID
    fetch('https://www.flickr.com/services/api/explore/flickr.photos.search')
      .then(response => {
        this.setState({
          photos: response.photo.id,
          loading: false
        });
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);

      });
  }
  render() {
  return (
    <div>
       {/* <div className="main-header"> 
        <div className="inner">
          <h1 className="main-title">flickrSearch</h1>
          <SearchForm onSearch={this.performSearch} />
        </div>
  </div>*/}
      <div className="main-content">
        
          (this.state.loading)
            ? <p>Loading...</p>
            : <flickrList data={this.state.photos} />
      
      </div>
    </div>
  );
  }  
  
}

export default App;

