import React, { Component } from 'react';
import EventFeed from './EventFeed';
import '../styles/EventBody.css';

class EventBody extends Component {
  render() {
    return (
      <div className="event-body">
        { this.props.feeds.map((feed, i) => (
          <EventFeed text={feed.text} source={feed.source} key={i}/>
        )) }
      </div>
    );
  }
}

export default EventBody;
