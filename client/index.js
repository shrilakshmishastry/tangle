import React,{Component} from "react";
import ReactDOM from "react-dom";
import App from './js/app.js';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
