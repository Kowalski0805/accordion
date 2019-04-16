import React, { Component } from 'react';
import AddEventButton from './AddEventButton';
import AddEventModal from './AddEventModal';

class AddEventContainer extends Component {
  render() {
    return (
      <div>
        <AddEventButton />
        <AddEventModal />
      </div>
    );
  }
}

export default AddEventContainer;
