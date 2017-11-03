import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class Careers extends Component {
  render() {
    return (
      <main style={Styles.textFields}>
        <h2>Apply Here!</h2>
        <TextField
          hintText="First Name"
        />
        <TextField
          hintText="Last Name"
        />
        <TextField
          hintText="Email"
        />
      </main>
    );
  }
}

const Styles = {
  textFields: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }

}
