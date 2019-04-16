import React, { Component } from 'react';
import EventFeed from './EventFeed';

class EventBody extends Component {
  render() {
    return (
      <div>
        { this.props.feeds.map(feed => (
          <EventFeed text={feed.text} source={feed.source}/>
        )) }
      </div>
    );
  }
}

export default EventBody;
