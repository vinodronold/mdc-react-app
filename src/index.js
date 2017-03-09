import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'material-components-web/dist/material-components-web.css';
import './index.css';
import setupLayout from './setup-layout';

ReactDOM.render(<App />, document.getElementById('app'));

setupLayout();
