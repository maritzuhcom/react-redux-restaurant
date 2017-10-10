import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './Nav/SideNav';
import Header from './Nav/Header';

export default class Main extends Component {
  render() {
    return(
      <section id='main' style={Styles.mainStyle}>
        <Header />
        <Router>
          <SideNav />
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
  }
}
