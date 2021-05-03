import React, { Component } from 'react';
import { Gif as flick } from './Flick';

export class Flickrs extends Component {

    state = {
        searchText: '',
        pictures: []
    }

    performSearch = query => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=16ac0a9da4a34378b0830395009fffb2&tags=cats&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pictures: response.photos.photo
                    //loading: true
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
        //console.log(this.state.searchText);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.searchText);
        this.performSearch(this.state.searchText);

        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit} >
                <label className="is-hidden" htmlFor="search">Search</label>
                <input type="search"
                    onChange={this.onSearchChange}
                    name="search"
                    placeholder="Search..." />
                <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
            </form>
        );
    }
}

//export default Flickrs;