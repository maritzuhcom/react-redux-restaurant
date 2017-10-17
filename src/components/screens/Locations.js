import React, { Component } from 'react';

export default class Locations extends Component {
  render() {
    return (
      <main id='locations' style={Styles.locations}>
        <span>Locations</span>
      </main>
    );
  }
}

const Styles = {
  locations: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
