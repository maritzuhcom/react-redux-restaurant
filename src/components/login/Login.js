import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/user';

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount = () => {
    if(this.props.authenticated) {
      this.context.router.history.push('/');
      return;
    }

    console.log(this.props.dispatchCheckAuth());
    // window.location.href = 'https://mpsso61.mediaplatformdev.com/mpsso/mpssows/v1/loginPage?redirectUrl=http%3A%2F%2Flocalhost.mediaplatformdev.com%3A3132%2F'
  }

  render() {
    return(
      <h1 style={Styles.login}>
        YOU BEST LOG IN!!
      </h1>
    );
  }
}

const Styles = {
  login: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '7em',
    fontFamily: 'roboto'
  }
}

function mapStateToProps(state) {
  return state.user;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchCheckAuth: bindActionCreators(checkAuth, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
