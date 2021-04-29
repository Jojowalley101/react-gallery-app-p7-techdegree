import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SearchForm from './SearchForm';
import GifList from './FlickrList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }
  componentDidMount() {

    // Make a request for a user with a given ID
    axios.fetch('https://www.flickr.com/services/api/explore/flickr.photos.search')
      .then(response => {
        this.setState({
          photos: response.photo.options
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
  }  
  
}

export default App;

