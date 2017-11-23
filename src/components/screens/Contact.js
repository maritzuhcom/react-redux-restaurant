import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Contact extends Component {
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
              errorText='This field is required'
            />
            <TextField
              hintText='Email'
              errorText='This field is required'
            />
          </section>
          <section style={Styles.fieldWrapper}>
            <TextField
              hintText='Subject'
              errorText='This field is required'
            />
            <TextField
              hintText='Message'
              errorText='This field is required.'
              floatingLabelText='Message'
              multiLine={true}
              rows={5}
              rowsMax={5}
            />
          </section>

        </div>
        <RaisedButton
          label="Submit"
          fullWidth={true}
        />
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
