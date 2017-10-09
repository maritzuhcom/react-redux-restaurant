import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import 'typeface-roboto';

const App = () => {
  return (
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  )
}

ReactDom.render(
  <App />,
  document.body.querySelector('.container')
);
