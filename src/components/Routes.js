import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Careers from './screens/Careers';
import Contact from './screens/Contact';
import Food from './screens/Food';
import Locations from './screens/Locations';


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route path='/careers' component={Careers}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/food' component={Food}/>
        <Route path='/locations' component={Locations}/>
      </Switch>
    );
  }
}
