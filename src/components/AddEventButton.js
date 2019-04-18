import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';

const AddEventButton = ({ onButtonClick }) => (
  <button onClick={onButtonClick}>Add</button>
);

const mapDispatchToProps = dispatch => ({ onButtonClick: () => dispatch(toggleModal()) });

export default connect(null, mapDispatchToProps)(AddEventButton);
