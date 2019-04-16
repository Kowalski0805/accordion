import React, { Component } from 'react';
import AddEventForm from './AddEventForm';

class AddEventModal extends Component {
  render() {
    return (
      <div>
        <button>&times;</button>
        <h2>Add event</h2>
        <AddEventForm />
      </div>
    );
  }
}

export default AddEventModal;
