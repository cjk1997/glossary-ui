import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import Glossary from './Glossary';


ReactDOM.render(
  <React.StrictMode>
    <Glossary />
  </React.StrictMode>,
  document.getElementById('root')
);