import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Component } from 'react';
import { render } from '@testing-library/react';
class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }
  componentDidMount() {
    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('https://www.flickr.com/services/api/explore/flickr.photos.search')
      .then(response => {
        this.setState({
          pictures: response.data
        });

        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  render() {
  return;
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  }  
  
}

export default App;

