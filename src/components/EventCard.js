import React, { Component } from 'react';
import EventHeader from './EventHeader';
import EventBody from './EventBody';

class EventCard extends Component {
  render() {
    const { name, type, location, feeds } = this.props.event;
    return (
      <div>
        <EventHeader name={name} type={type} location={location} />
        <EventBody feeds={feeds} />
      </div>
    );
  }
}

export default EventCard;
