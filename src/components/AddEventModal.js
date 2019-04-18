import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import AddEventForm from './AddEventForm';
import '../styles/AddEventModal.css';

const AddEventModal = ({ shown, onCloseClick }) => shown ? (
  <div className="add-event-modal">
    <button className="close" onClick={onCloseClick}>&times;</button>
    <h2 className="title">Add event</h2>
    <AddEventForm />
  </div>
) : null;

const mapStateToProps = state => ({ shown: state.shownModal });
const mapDispatchToProps = dispatch => ({ onCloseClick: () => dispatch(toggleModal()) });

export default connect(mapStateToProps, mapDispatchToProps)(AddEventModal);
