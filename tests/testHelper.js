import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from '../src/reducers';

import _ from 'lodash';

// Initial DOM setup
global.document = jsdom.jsdom(`
  <!DOCTYPE HTML>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
`);

// Environemt setup for test framework
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global._ = _;

// DOM event simulator
global.simulate = function(eventName, value, el) {
  if(value) {
    el.value = value;
  }

  TestUtils.Simulate[eventName](el);
}

const context = {};

function renderComponent(ComponentClass, props = {}, state = {}) {
  // This looks complex but react/redux some dependencies on the
  // DOM tree
  const componentInstance = ReactTestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <StaticRouter context={context}>
        <MuiThemeProvider>
          <ComponentClass {...props}/>
        </MuiThemeProvider>
      </StaticRouter>
    </Provider>
  );

  return ReactDOM.findDOMNode(componentInstance);
}

export { renderComponent, expect };
