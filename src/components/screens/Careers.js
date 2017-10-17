import React, { Component } from 'react';

export default class Careers extends Component {
  render() {
    return (
      <main id='careers' style={Styles.careers}>
        <span>Careers</span>
      </main>
    );
  }
}

const Styles = {
  careers: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
