import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleEvent } from '../actions';
import EventHeader from './EventHeader';
import EventBody from './EventBody';
import '../styles/EventCard.css';

class EventCard extends Component {
  render() {
    const { id, name, type, location, feeds } = this.props.event;
    return (
      <div className="event-card">
        <EventHeader name={name} type={type} location={location} onEventClick={() => this.props.onEventClick(id)}/>
        {this.props.extended ? <EventBody feeds={feeds} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onEventClick: id => dispatch(toggleEvent(id))
});

export default connect(null, mapDispatchToProps)(EventCard);
