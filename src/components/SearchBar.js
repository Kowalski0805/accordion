import React from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions';
import '../styles/SearchBar.css';

const SearchBar = ({ value, onFilterChange }) => (
  <input type="text" className="search-bar" placeholder="Search" value={value} onChange={onFilterChange} />
);

const mapStateToProps = state => ({
  value: state.filter
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: e => dispatch(filter(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
