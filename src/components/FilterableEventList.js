import React, { Component } from 'react';
import AddEventContainer from './AddEventContainer';
import SearchBar from './SearchBar';
import EventList from './EventList';

class FilterableEventList extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <AddEventContainer />
        <SearchBar />
        <EventList events={this.props.events} />
      </div>
    );
  }
}

export default FilterableEventList;
