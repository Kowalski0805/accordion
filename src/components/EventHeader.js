import React, { Component } from 'react';
import '../styles/EventHeader.css';

class EventHeader extends Component {
  render() {
    return (
      <div className="event-header" onClick={this.props.onEventClick}>
        <div className="title">
          <h3>{this.props.name}</h3>
        </div>
        <div className="description">
          <span>Type: {this.props.type}</span>
          <br />
          <span>Location: {this.props.location}</span>
        </div>
      </div>
    );
  }
}

export default EventHeader;
