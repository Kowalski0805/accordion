export const ADD_EVENT = 'ADD_EVENT';
export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FILTER = 'FILTER';

export const addEvent = event => ({ type: ADD_EVENT, event });
export const toggleEvent = id => ({ type: TOGGLE_EVENT, id });
export const toggleModal = () => ({ type: TOGGLE_MODAL });
export const filter = filter => ({ type: FILTER, filter });
