import React, { Component } from 'react';
import '../styles/SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <input type="text" className="search-bar" placeholder="Search" />
    );
  }
}

export default SearchBar;
