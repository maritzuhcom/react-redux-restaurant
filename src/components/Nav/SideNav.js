import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class SideNav extends Component {
  render() {
    return(
      <section id='sideNav'>
        <FlatButton style={{width: '12em'}} label='create'/>
      </section>
    )
  }
}
