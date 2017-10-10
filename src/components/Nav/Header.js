import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import wcLogo from '../../assets/wc_logo.svg';
import IconButton from 'material-ui/IconButton';
import { toggleHomeDrawer } from '../../actions/overlays';

class Header extends Component{
  menuClickHandler = (e) => {
    this.props.dispatchToggleHomeDrawer(true);
  }

  render() {
    return (
      <header id='header' style={Styles.header}>
        <section style={Styles.section}>
          <IconButton
            iconClassName='material-icons'
            iconStyle={Styles.icon}
            touchRippleColor='white'
            onClick={this.menuClickHandler}
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

function mapDispatchToProps(dispatch) {
  return {
    dispatchToggleHomeDrawer: bindActionCreators(toggleHomeDrawer, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Header)

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
