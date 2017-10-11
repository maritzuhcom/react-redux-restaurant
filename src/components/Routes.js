import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import authDecorator from './hoc/Auth';
import Events from './events/Events';
import Settings from './settings/Settings';
import Home from './home/Home';
import Help from './help/Help';
import Login from './login/Login';

const ComposedEvents = authDecorator(Events);
const ComposedSettings = authDecorator(Settings);
const ComposedHome = authDecorator(Home);
const ComposedHelp = authDecorator(Help);

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path ='/' component={ComposedHome} />
        <Route path ='/events' component={ComposedEvents} />
        <Route path ='/settings' component={ComposedSettings} />
        <Route path ='/help' component={ComposedHelp} />
        <Route path ='/login' component={Login} />
      </Switch>
    );
  }
}
