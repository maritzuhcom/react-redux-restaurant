import React, { Component } from 'react';
import wcLogo from '../../assets/wc_logo.svg';
import IconButton from 'material-ui/IconButton';

export default class Header extends Component{
  render() {
    return (
      <header id='header' style={Styles.header}>
        <section style={Styles.section}>
          <IconButton
            iconClassName='material-icons'
            iconStyle={Styles.icon}
            touchRippleColor='white'
          >
            dehaze
          </IconButton>
        </section>

        <section>
        </section>
      </header>
    )
  }
}

const Styles = {
  header: {
    position: 'absolute',
    top: '0',
    height: '4rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'rgb(0,0,0)'
  },
  icon: {
    color: 'rgb(255,255,255)'
  },
  section: {
    display: 'flex',
    alignItems: 'center'
  }
}
