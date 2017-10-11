import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './style.css';

import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

class SideNav extends Component {
  render() {
    return(
      <section
        id='sideNav'
        className={`sideNav ${this.props.homeDrawerOpen ? 'open' : ''}`}
        style={Styles.navStyle}
      >
        <RaisedButton
          style={Styles.createBtn}
          buttonStyle={{backgroundColor: '#2bbbad'}}
          primary={true}
          label='CREATE'
        />

        <Menu
          desktop={true}
          autoWidth={false}
          style={Styles.menu}
        >
          <Link to={'/'}>
            <MenuItem style={Styles.menuItem} primaryText='Home'/>
          </Link>

          <Link to={'/events'}>
            <MenuItem style={Styles.menuItem} primaryText='Events'/>
          </Link>

          <Divider />

          <Link to={'/settings'}>
            <MenuItem style={Styles.menuItem} primaryText='Settings'/>
          </Link>

          <Link to={'/help'}>
            <MenuItem style={Styles.menuItem} primaryText='Help'/>
          </Link>

          <Link to={'/'}>
            <MenuItem style={Styles.menuItem} primaryText='Logout'/>
          </Link>
        </Menu>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return state.overlays
}

export default connect(mapStateToProps)(SideNav)

const Styles = {
  navStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%',
    borderRight: '1px solid rgb(0,0,0)',
    overflow: 'hidden'
  },
  createBtn: {
    width: 'calc(100% - 4rem)',
    margin: '1.5rem 2rem 0px',
    boxSizing: 'border-box'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  menuItem: {
    width: '100%',
    fontWeight: '600'
  }
}
