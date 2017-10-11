import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import wcLogo from '../../assets/wc_logo.svg';
import { toggleHomeDrawer } from '../../actions/overlays';

import './style.css';

import IconButton from 'material-ui/IconButton';

class Header extends Component{
  menuClickHandler = (e) => {
    this.props.dispatchToggleHomeDrawer(!this.props.homeDrawerOpen);
  }

  render() {
    const isAuth = this.props.authenticated
    return (
      <header id='header' style={Styles.header}>
        {isAuth ?
            <section style={Styles.section}>

              <div style={Styles.subSection}>
                <IconButton
                  iconClassName='material-icons'
                  iconStyle={Styles.icon}
                  touchRippleColor='white'
                  onClick={this.menuClickHandler}
                >
                  dehaze
                </IconButton>
                <NavLink to='/'>
                  <img style={Styles.img} src={wcLogo}/>
                </NavLink>
              </div>

              <span style={Styles.location}>Home</span>
            </section>
          :
            <section style={Styles.section}>
              <img style={Styles.img} src={wcLogo}/>
            </section>
        }


        <section style={Styles.section} className={isAuth ? '': 'hidden'}>
          <IconButton
            iconClassName='material-icons'
            iconStyle={Styles.icon}
            touchRippleColor='white'
          >
            filter_list
          </IconButton>

          <IconButton
            iconClassName='material-icons'
            iconStyle={Styles.icon}
            touchRippleColor='white'
          >
            view_module
          </IconButton>

          <IconButton
            iconClassName='material-icons'
            iconStyle={Styles.icon}
            touchRippleColor='white'
          >
            notifications
          </IconButton>
        </section>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {...state.overlays, ...state.user};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchToggleHomeDrawer: bindActionCreators(toggleHomeDrawer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

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
  img: {
    height: '1.1rem',
    marginLeft: '1rem'
  },
  icon: {
    color: 'rgb(255,255,255)'
  },
  section: {
    display: 'flex',
    alignItems: 'center'
  },
  location: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'roboto'
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    width: '20rem'
  }
}
