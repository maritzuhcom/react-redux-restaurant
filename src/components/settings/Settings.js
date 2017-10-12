import React, { Component } from 'react';

export default class Settings extends Component {
  render() {
    return (
      <main id='settings' style={Styles.settings}>
        <span>Settings</span>
      </main>
    );
  }
}

const Styles = {
  settings: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
