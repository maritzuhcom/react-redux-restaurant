import React, { Component } from 'react';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export  default class MenuItem extends Component {
  render () {
    return(
      <Card
        style={Styles.card}
      >
        <CardHeader
          title={this.props.title}
          subtitle={this.props.price}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
         <FlatButton label="Add to cart" />
         <FlatButton label="Remove" />
         </CardActions>
         <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

const Styles = {
  card: {
    width: 'calc(50% - 1em)',
    margin: '.5em'
  }
}
