import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      subject: '',
      subjectError: '',
      message: '',
      messageError: '',
      modalOpen: false
    }
  }


  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangeSubject = (e) => {
    this.setState({
      subject: e.target.value
    });
  }

  onChangeMessage = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  emailIsValid = () => {
    const { email } = this.state;

    if(!email.includes('@')) {
      return false;
    }


    if(!email.includes('.')) {
      return false;
    }

    return true;
  }

  handleOpen = () => {
    const errorMessage = 'This field is required'

    if (this.state.name === '' ||
      !this.emailIsValid() ||
      this.state.email === '' ||
      this.state.subject === '' ||
      this.state.message === ''
    ) {

      this.state.name === '' ? this.setState({nameError: errorMessage}) : '';
      this.emailIsValid() ? '' : this.setState({emailError: 'Use a correct email'});
      this.state.subject === '' ? this.setState({subjectError: errorMessage}) : '';
      this.state.message === '' ? this.setState({messageError: errorMessage}) : '';

      return;
    }

    this.setState({
      modalOpen: true,
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      subject: '',
      subjectError: '',
      message: '',
      messageError: ''
    });
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <main id='contact' style={Styles.contact}>
      <div style={Styles.title}>
        <span>Please complete the form below if you have questions or concerns.</span>
      </div>
        <div style={Styles.sectionWrapper}>
          <section style={Styles.fieldWrapper}>
            <TextField
              hintText='Name'
              value={this.state.name}
              errorText={this.state.nameError}
              onChange={this.onChangeName}
            />
            <TextField
              hintText='Email'
              value={this.state.email}
              errorText={this.state.emailError}
              onChange={this.onChangeEmail}
            />
          </section>
          <section style={Styles.fieldWrapper}>
            <TextField
              hintText='Subject'
              value={this.state.subject}
              errorText={this.state.subjectError}
              onChange={this.onChangeSubject}
            />
            <TextField
              hintText='Message'
              value={this.state.message}
              errorText={this.state.messageError}
              floatingLabelText='Message'
              onChange={this.onChangeMessage}
              multiLine={true}
              rows={5}
              rowsMax={5}
            />
          </section>

        </div>
        <RaisedButton
          label="Submit"
          fullWidth={true}
          onClick={this.handleOpen}
          />
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
          Submitted
        </Dialog>
      </main>
    );
  }
}

const Styles = {
  contact: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  sectionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '30%'
  },
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
}
