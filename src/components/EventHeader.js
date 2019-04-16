import React, { Component } from 'react';

class EventHeader extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <span>{this.props.type}</span>
        <span>{this.props.location}</span>
      </div>
    );
  }
}

export default EventHeader;
