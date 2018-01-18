import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import reducers from './reducers';
import 'typeface-roboto';
import './css/app.css';
// Redux dev tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux setup
const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
);
const store = createStore(reducers, enhancer);

// Main element that gets rendered to index.html
const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.body.querySelector('.container')
);
