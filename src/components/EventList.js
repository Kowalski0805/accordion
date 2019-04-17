import React, { Component } from 'react';
import EventCard from './EventCard';
import '../styles/EventList.css';

class EventList extends Component {
  render() {
    return (
      <div className="event-list">
        { this.props.events.map(event => (
          <EventCard event={event} key={event.id}/>
        )) }
      </div>
    );
  }
}

export default EventList;
