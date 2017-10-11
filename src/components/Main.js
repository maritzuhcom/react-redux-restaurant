import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SideNav from './nav/SideNav';
import Header from './nav/Header';
import Routes from './Routes';

export default class Main extends Component {
  render() {
    return(
      <section id='main' style={Styles.mainStyle}>
        <Router>
          <div style={Styles.wrapper}>
            <Header />
            <SideNav />
            <Routes />
          </div>
        </Router>
      </section>
    );
  }
}

const Styles = {
  mainStyle: {
    marginTop: '4rem',
    height: 'calc(100% - 3rem)',
    width: '100%'
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}
