import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <main id='contact' style={Styles.contact}>
        <span>Contact</span>
      </main>
    );
  }
}

const Styles = {
  contact: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
