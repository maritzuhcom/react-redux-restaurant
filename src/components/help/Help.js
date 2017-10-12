import React, { Component } from 'react';

export default class Help extends Component {
  render() {
    return (
      <main id='help' style={Styles.help}>
        <span>Help</span>
      </main>
    );
  }
}

const Styles = {
  help: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
