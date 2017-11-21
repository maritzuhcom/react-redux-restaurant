import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class Careers extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    });

  }

  handleClose = () => {
    this.setState({
      modalOpen: false,
      firstName: '',
      lastName: '',
      email: ''
    })
  }

  firstNameHandler = (e) => {
    this.setState({
      firstName: e.target.value
    });
  }

  lastNameHandler = (e) => {
    this.setState({
      lastName: e.target.value
    });
  }

  emailHandler = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    return (
      <main style={Styles.textFields}>
        <h2>APPLY HERE!</h2>
        <TextField
          hintText="FIRST NAME"
          value={this.state.firstName}
          onChange={this.firstNameHandler}
        />
        <TextField
          hintText="LAST NAME"
          value={this.state.lastName}
          onChange={this.lastNameHandler}
        />
        <TextField
          hintText="EMAIL"
          value={this.state.email}
          onChange={this.emailHandler}
        />
        <FlatButton
          label="UPLOAD RESUME"
          style={Styles.uploadButton}
          containerElement="label"
        >
          <input type="file" style={Styles.uploadInput} />
        </FlatButton>


        <FlatButton label="SUBMIT" fullWidth={true} onClick={this.handleOpen}/>
        <div>
          <Dialog
            actions={[
              <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
              />
            ]}
            open={this.state.modalOpen}
            onRequestClose={this.handleClose}
          >
            Thank You For Applying!
          </Dialog>
        </div>

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
