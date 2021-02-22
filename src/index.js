import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "./icomoon/style.css";
import "font-awesome/css/font-awesome.css";
import "./Css/fixed.css"
import 'normalize.css';
import "./Css/responsive.css"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

