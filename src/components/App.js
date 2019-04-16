import React, { Component } from 'react';
import '../styles/App.css';
import FilterableEventList from './FilterableEventList';

const EVENTS = [
  {"id":1,"type":"natural","name":"Total body perfusion","location":"Novoshakhtinskiy","feeds":[
    {"text":"Maecenas pulvinar lobortis est.","source":"e-recht24.de"},
    {"text":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","source":"fotki.com"}
  ]},
  {"id":2,"type":"technogenic","name":"Posterior anal sphincterotomy","location":"Delray Beach","feeds":[
    {"text":"Sed ante.","source":"addthis.com"}
  ]},
  {"id":3,"type":"natural","name":"Procedure on vessel bifurcation","location":"Płock","feeds":[
    {"text":"Nulla mollis molestie lorem. Quisque ut erat.","source":"usda.gov"},
    {"text":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","source":"dailymail.co.uk"},
    {"text":"Suspendisse potenti. Nullam porttitor lacus at turpis.","source":"skype.com"},
    {"text":"Suspendisse potenti.","source":"linkedin.com"},
    {"text":"Integer a nibh. In quis justo.","source":"wordpress.com"}
  ]},
  {"id":4,"type":"company","name":"Restoration of tooth by filling","location":"South Bend","feeds":[
    {"text":"Sed sagittis.","source":"people.com.cn"},
    {"text":"Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","source":"baidu.com"},
    {"text":"Integer ac leo. Pellentesque ultrices mattis odio.","source":"so-net.ne.jp"}
  ]},
  {"id":5,"type":"company","name":"Removal of prosthesis of fallopian tube","location":"Oravais","feeds":[
    {"text":"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.","source":"storify.com"}
  ]}
];

class App extends Component {
  render() {
    return (
      <div>
        <FilterableEventList events={EVENTS}/>
      </div>
    );
  }
}

export default App;
