import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';
import './style.css';

class SideNav extends Component {
  render() {
    return(
      <section
        id='sideNav'
        className={`sideNav ${this.props.homeDrawerOpen ? 'open' : ''}`}
        style={Styles.navStyle}
      >
        <Link to={'/idk/'}>
          <FlatButton style={{width: '12em'}} label='create'/>
        </Link>

        <Link to={'/idk/'}>
            <FlatButton style={{width: '12em'}} label='home'/>
        </Link>

        <Link to={'/idk/'}>
          <FlatButton style={{width: '12em'}} label='login'/>
        </Link>
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
    flexDirection: 'column'
  }
}
