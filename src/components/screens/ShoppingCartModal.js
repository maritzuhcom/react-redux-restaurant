import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { toggleCartDrawer } from '../../actions/cart';
import Chip from 'material-ui/Chip';


class ShoppingCartModal extends Component {
  handleClick = () => {
    this.props.dispatchCloseCartDrawer(false);
  }

  deleteHandler = () => {
    console.log('hey');
  }


  render() {
    const chips = this.props.orders.map((orderItem, i) => {
      return(
        <Chip
          onRequestDelete={this.deleteHandler}
          style={Style.theChip}
          labelStyle={Style.theChip}
          key={i}
        >
          {orderItem}
        </Chip>
      )
    });
    return(
      <Drawer
        docked={false}
        width={300}
        open={this.props.drawerOpen}
        containerStyle={Style.wrapper}
      >
        <div style={Style.shoppingItems}>
          {chips}
        </div>
        <div style={Style.price}>
          <h3>Price: {this.props.price}</h3>
        </div>
        <footer style={Style.footer}>
          <FlatButton label="Cancel" onClick={this.handleClick}/>
          <FlatButton label="Checkout" />
        </footer>

      </Drawer>
    )
  }
}

function mapStateToProps(state) {
  return {...state.cart};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchCloseCartDrawer: bindActionCreators(toggleCartDrawer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartModal)

const Style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  shoppingItems: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    padding: '2em',
    boxSizing: 'border-box'
  },
  price: {
    width: '100%',
    height: '5em',
    backgroundColor: 'red',
  },
  footer: {
    width: '100%',
    height: '5em',
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  theChip: {
    width: '100%'
  }
}
