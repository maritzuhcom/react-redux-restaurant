import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Events from './events/Events';
import Settings from './settings/Settings';
import Home from './home/Home';
import Help from './help/Help';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path ='/events' component={Events} />
        <Route path ='/settings' component={Settings} />
        <Route path ='/help' component={Help} />
      </Switch>
    );
  }
}
