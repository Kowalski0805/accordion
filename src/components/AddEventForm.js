import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions';
import '../styles/AddEventForm.css';

class AddEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: '',
      location: ''
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onEventSubmit({ ...this.state, feeds: [] });
    this.setState({ name: '', type: '', location: '' });
  }

  render() {
    return (
      <form className="add-event-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="type" placeholder="Type" value={this.state.type} onChange={this.handleChange} />
        <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleChange} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onEventSubmit: e => dispatch(addEvent(e))
})

export default connect(null, mapDispatchToProps)(AddEventForm);
