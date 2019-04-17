import React, { Component } from 'react';
import '../styles/AddEventForm.css';

class AddEventForm extends Component {
  render() {
    return (
      <form className="add-event-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Type" />
        <input type="text" placeholder="Location" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddEventForm;
