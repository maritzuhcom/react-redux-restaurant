import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { toggleCartDrawer } from '../../actions/cart';


class ShoppingCartModal extends Component {
  handleClick = () => {
    this.props.dispatchCloseCartDrawer(false);
  }

  render() {
    return(
      <Drawer
        docked={false}
        width={300}
        open={this.props.drawerOpen}
        containerStyle={Style.wrapper}
      >
        <div style={Style.shoppingItems}>
        </div>
        <div style={Style.price}>
          <h2>Price: {this.props.price}</h2>
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
    flexDirection: 'column',

  },
  shoppingItems: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',

  },
  price: {
    width: '100%',
    height: '5em',
    backgroundColor: 'red',
    paddingLeft: '1.4em'
  },
  footer: {
    width: '100%',
    height: '5em',
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

}
