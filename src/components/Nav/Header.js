import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import reduxLogo from '../../assets/logo.png';
import Dialog from 'material-ui/Dialog';
import ShoppingCartModal from '../screens/ShoppingCartModal';
import { toggleHomeDrawer } from '../../actions/overlays';
import { toggleCartDrawer } from '../../actions/cart';
import './style.css';
import IconButton from 'material-ui/IconButton';

class Header extends Component{
  handleClick = () => {
    this.props.dispatchToggleCartDrawer(true);
  }

  menuClickHandler = (e) => {
    this.props.dispatchToggleHomeDrawer(!this.props.homeDrawerOpen);
  }

  render() {
    return (
      <header id='header' style={Styles.header}>
        <section style={Styles.section}>

          <div style={Styles.subSection}>
            <IconButton
              id='menu'
              iconClassName='material-icons'
              iconStyle={Styles.icon}
              touchRippleColor='white'
              onClick={this.menuClickHandler}
            >
              dehaze
            </IconButton>
            <NavLink to='/'>
              <img style={Styles.img} src={reduxLogo} />
            </NavLink>
          </div>

          <span style={Styles.location}>React-Redux-Restaurant!</span>
        </section>

        <section style={Styles.section}>
          <IconButton
            onClick={this.handleClick}
            iconClassName='material-icons'
            iconStyle={Styles.icon}
            touchRippleColor='white'
            tooltip='Checkout'
          >
            add_shopping_cart
          </IconButton>
          <ShoppingCartModal/>

        </section>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {...state.overlays};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchToggleHomeDrawer: bindActionCreators(toggleHomeDrawer, dispatch),
    dispatchToggleCartDrawer: bindActionCreators(toggleCartDrawer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
