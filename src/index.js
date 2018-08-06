import React from 'react';
import reactDom from 'react-dom';
import App from './app';
import './index.scss';
import './assets/common.css';
import './assets/reset.css';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    withRouter
  } from 'react-router-dom';

import store from './store';

reactDom.render(<Provider store={store}><Router><App></App></Router></Provider>, document.getElementById('root'));
