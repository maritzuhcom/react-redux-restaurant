import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleHomeDrawer } from '../../actions/overlays';

class Home extends Component {
  componentDidMount() {
    if(this.props.authenticated) {
      this.props.dispatchToggleHomeDrawer(true);
    }
  }

  render() {
    return (
      <main id='home' style={Styles.main}>
        <span>Home</span>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return state.user
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchToggleHomeDrawer: bindActionCreators(toggleHomeDrawer, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Styles = {
  main: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
