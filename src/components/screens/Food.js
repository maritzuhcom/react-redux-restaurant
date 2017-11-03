import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MenuItem from './food/MenuItem';

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

  getBreakfastItems = () => {
    return this.props.breakfast.map((breakfastItem, i) => {
      return (
        <MenuItem
          key={i}
          title={breakfastItem.name}
          price={breakfastItem.price}
        />
      );
    })
  }

  getLunchItems = () => {
    return this.props.lunch.map((lunchItem, i) => {
      return (
        <MenuItem
          key={i}
          title={lunchItem.name}
          price={lunchItem.price}
        />
      );
    })
  }

  getDinnerItems = () => {
    return this.props.dinner.map((dinnerItem, i) => {
      return (
        <MenuItem
          key={i}
          title={dinnerItem.name}
          price={dinnerItem.price}
        />
      );
    })
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
            <div style={Styles.innerTab}>
              {this.getBreakfastItems()}
            </div>
          </Tab>
          <Tab onActive={this.getLunch} label="Lunch" value="b" style={Styles.tabs}>
            <div style={Styles.tabs}>
              <div style={Styles.innerTab}>
                {this.getLunchItems()}
              </div>

            </div>
          </Tab>
          <Tab onActive={this.getDinner} label="Dinner" value="c" style={Styles.tabs}>
            <div style={Styles.tabs}>
              <div style={Styles.innerTab}>
                {this.getDinnerItems()}
              </div>

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
    alignItems: 'stretch',
    overflow: 'scroll'
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
    justifyContent: 'flex-start',
  },
  innerTab: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'auto',
    maxHeight: '100%',
    overflow: 'auto'
  }
}
