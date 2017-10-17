import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class Food extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'a'
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
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
          <Tab label="Tab A" value="a">
            <div style={Styles.tabs}>
              <h2 style={Styles.headline}>Controllable Tab A</h2>
              <p>
                Content A
              </p>
            </div>
          </Tab>
          <Tab label="Tab B" value="b" style={Styles.tabs}>
            <div style={Styles.tabs}>
              <h2 style={Styles.headline}>Controllable Tab B</h2>
              <p>
                Content B
              </p>
            </div>
          </Tab>
        </Tabs>
      </main>
    );
  }
}

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
