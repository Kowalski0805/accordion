import React, { Component } from 'react';
import EventCard from './EventCard';

class EventList extends Component {
  render() {
    return (
      <div>
        { this.props.events.map(event => (
          <EventCard event={event} key={event.id}/>
        )) }
      </div>
    );
  }
}

export default EventList;
