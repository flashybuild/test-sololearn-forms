import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactManager from './App';
import reportWebVitals from './reportWebVitals';

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];


ReactDOM.render(
  <React.StrictMode>
    <ContactManager data={contacts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
