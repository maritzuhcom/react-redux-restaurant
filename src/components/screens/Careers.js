import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

export default class Careers extends Component {
  render() {
    return (
      <main style={Styles.textFields}>
        <h2>APPLY HERE!</h2>
        <TextField
          hintText="FIRST NAME"
        />
        <TextField
          hintText="LAST NAME"
        />
        <TextField
          hintText="EMAIL"
        />
        <FlatButton
          label="UPLOAD RESUME"
          style={Styles.uploadButton}
          containerElement="label"
        >
          <input type="file" style={Styles.uploadInput} />
        </FlatButton>


        <FlatButton label="SUBMIT" fullWidth={true} />

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
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif'
  },
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }

}
