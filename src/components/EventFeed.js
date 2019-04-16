import React, { Component } from 'react';

class EventFeed extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <span>{this.props.source}</span>
      </div>
    );
  }
}

export default EventFeed;
