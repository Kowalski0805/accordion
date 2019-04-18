import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventCard from './EventCard';
import '../styles/EventList.css';

class EventList extends Component {
  render() {
    return (
      <div className="event-list">
        { this.props.events.length > 0 ?
          this.props.events.map(event => (
            <EventCard event={event} key={event.id} extended={this.props.extended.includes(event.id)}/>
          )) : 'No results!'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events.filter(event => event.feeds.reduce((a, v) => a + v.text, event.name).toLowerCase().includes(state.filter.toLowerCase())),
  extended: state.shownEvents
});

export default connect(mapStateToProps)(EventList);
