import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getLunch, getBreakfast, getDinner } from '../../actions/food';

class Food extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'a'
    };
  }

  componentDidMount() {
    this.props.dispatchGetBreakfast();
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
  }

  getBreakfast = () => {
    this.props.dispatchGetBreakfast();
  }

  getLunch = () => {
    this.props.dispatchGetLunch();
  }

  getDinner = () => {
    this.props.dispatchGetDinner();
  }

  render() {
    return (
      <main id='food' style={Styles.food}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          contentContainerStyle={Styles.tabContainer}
          tabTemplateStyle={Styles.tabTemplateStyle}
          style={{height: '100%'}}
        >
          <Tab onActive={this.getBreakfast} label="Breakfast" value="a">
            <div style={Styles.tabs}>
              <h2 style={Styles.headline}>Breakfast</h2>

            </div>
          </Tab>
          <Tab onActive={this.getLunch} label="Lunch" value="b" style={Styles.tabs}>
            <div style={Styles.tabs}>
              <h2 style={Styles.headline}>Lunch</h2>

            </div>
          </Tab>
          <Tab onActive={this.getDinner} label="Dinner" value="c" style={Styles.tabs}>
            <div style={Styles.tabs}>
              <h2 style={Styles.headline}>Dinner</h2>

            </div>
          </Tab>
        </Tabs>
      </main>
    );
  }
}

// this connects the Component to the state
function mapStateToProps(state) {
  return {...state.food};
}

//this connects the compoent to the action
function mapDispatchToProps(dispatch) {
  return {
    dispatchGetLunch: bindActionCreators(getLunch, dispatch),
    dispatchGetBreakfast: bindActionCreators(getBreakfast, dispatch),
    dispatchGetDinner: bindActionCreators(getDinner, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);

const Styles = {
  food: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  // this is the container of the tab content
  tabTemplateStyle: {
    height: '100%'
  },
  tabContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}
