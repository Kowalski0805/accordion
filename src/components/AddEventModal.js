import React, { Component } from 'react';
import AddEventForm from './AddEventForm';
import '../styles/AddEventModal.css';

class AddEventModal extends Component {
  render() {
    return (
      <div className="add-event-modal">
        <button className="close">&times;</button>
        <h2 className="title">Add event</h2>
        <AddEventForm />
      </div>
    );
  }
}

export default AddEventModal;
