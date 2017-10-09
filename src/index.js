import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import Main from './components/Main';

ReactDom.render(
  <Main />,
  document.body.querySelector('.container')
);
