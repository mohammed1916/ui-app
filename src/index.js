import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Yellow from './components/Yellow';
import Green from './components/Green';
import Blue from './components/Blue';
import Red from './components/Red';

ReactDOM.render(
  <React.StrictMode>
    <Yellow />
    <Green />
    <Blue />
    <Red />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
