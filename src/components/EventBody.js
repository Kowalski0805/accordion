import React, { Component } from 'react';
import EventFeed from './EventFeed';
import '../styles/EventBody.css';

class EventBody extends Component {
  render() {
    return (
      <div className="event-body">
        { this.props.feeds.map(feed => (
          <EventFeed text={feed.text} source={feed.source}/>
        )) }
      </div>
    );
  }
}

export default EventBody;
