import React from 'react';

export const Gif = props => (
    <li className="gif-wrap">
        <img src={props.url} alt="" />
    </li>
);

import React, { Component } from 'react';

export default class SearchForm extends Component {

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
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

export default Gif;