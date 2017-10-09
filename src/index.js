import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

const App = () => (
  <div>
    hey you routed!
  </div>
);

ReactDom.render(
  <div>Hello!</div>,
  document.body.querySelector('.container')
);
