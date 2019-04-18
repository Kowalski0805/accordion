import { combineReducers } from 'redux';
import { ADD_EVENT, TOGGLE_EVENT, TOGGLE_MODAL, FILTER } from '../actions';

const initialEvents = [
  {"id":1,"type":"natural","name":"Protests agains government","location":"Novoshakhtinskiy","feeds":[
    {"text":"Maecenas pulvinar lobortis est.","source":"e-recht24.de"},
    {"text":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","source":"fotki.com"}
  ]},
  {"id":2,"type":"technogenic","name":"Nuclear plant explosion","location":"Delray Beach","feeds":[
    {"text":"Sed ante.","source":"addthis.com"}
  ]},
  {"id":3,"type":"natural","name":"Earthquake","location":"Płock","feeds":[
    {"text":"Nulla mollis molestie lorem. Quisque ut erat.","source":"usda.gov"},
    {"text":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","source":"dailymail.co.uk"},
    {"text":"Suspendisse potenti. Nullam porttitor lacus at turpis.","source":"skype.com"},
    {"text":"Suspendisse potenti.","source":"linkedin.com"},
    {"text":"Integer a nibh. In quis justo.","source":"wordpress.com"}
  ]},
  {"id":4,"type":"company","name":"Youtube bans copyrighted materials","location":"South Bend","feeds":[
    {"text":"Sed sagittis.","source":"people.com.cn"},
    {"text":"Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","source":"baidu.com"},
    {"text":"Integer ac leo. Pellentesque ultrices mattis odio.","source":"so-net.ne.jp"}
  ]},
  {"id":5,"type":"company","name":"Apple announces iPhone 15","location":"Oravais","feeds":[
    {"text":"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.","source":"storify.com"}
  ]}
];

//*
let maxId = initialEvents.reduce((acc, val) => Math.max(acc, val.id), 1);
/*/
let maxId = Math.max(...initialEvents.map(e => e.id));
//*/

function events(state = initialEvents, action) {
  switch (action.type) {
    case ADD_EVENT:
      return [ ...state, { ...action.event, id: ++maxId } ];
    default:
      return state;
  }
}

function shownEvents(state = [], action) {
  switch (action.type) {
    case TOGGLE_EVENT:
      if (state.includes(action.id))
        return state.filter(x => x !== action.id);
      else 
        return state.concat(action.id);
    default:
      return state;
  }
}

function shownModal(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
}

function filter(state = '', action) {
  switch (action.type) {
    case FILTER:
      return action.filter;
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  events,
  shownEvents,
  shownModal,
  filter
});

export default mainReducer;
