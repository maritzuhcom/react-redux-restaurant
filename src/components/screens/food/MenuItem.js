import React, { Component } from 'react';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToCart } from '../../../actions/cart';

class MenuItem extends Component {

  clickHandler = () => {
    this.props.dispatchAddToCart({
      item: this.props.title,
      price: this.props.price
    })
  }

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
         <FlatButton label="Add to cart" onClick={this.clickHandler}/>

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

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddToCart: bindActionCreators(addToCart, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(MenuItem);

const Styles = {
  card: {
    width: 'calc(50% - 1em)',
    margin: '.5em'
  }
}
