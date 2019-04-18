import React, { Component } from 'react';
import '../styles/App.css';
import FilterableEventList from './FilterableEventList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FilterableEventList />
      </div>
    );
  }
}

export default App;
