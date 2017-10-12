import React, { Component } from 'react';

export default class Events extends Component {
  render() {
    return (
      <main id='events' style={Styles.events}>
        <span>Events</span>
      </main>
    );
  }
}

const Styles = {
  events: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
