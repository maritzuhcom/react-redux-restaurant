import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillUpdate = (nextProps) => {
      if(!nextProps.authenticated) {
        this.context.router.history.push('/login')
      }
    }

    componentWillMount = () => {
      if(!this.props.authenticated) {
        this.context.router.history.push('/login');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return state.user
  }

  return connect(mapStateToProps)(Authentication);
}
