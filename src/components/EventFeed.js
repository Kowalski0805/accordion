import React, { Component } from 'react';
import '../styles/EventFeed.css';

class EventFeed extends Component {
  render() {
    return (
      <div className="event-feed">
        <p>{this.props.text}</p>
        <span>{this.props.source}</span>
      </div>
    );
  }
}

export default EventFeed;
