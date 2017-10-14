import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleHomeDrawer } from '../../actions/overlays';

export default class Home extends Component {
  render() {
    return (
      <main id='home' style={Styles.main}>
        <span>Home</span>
      </main>
    );
  }
}

const Styles = {
  main: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
