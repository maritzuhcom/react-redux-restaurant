import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';


class ShoppingCartModal extends Component {
  render() {
    return(
      <section>
        <Dialog
          title="Dialog with actions"
          modal={true}
          open={this.props.modalOpen}
        >
          <h2>What</h2>
        </Dialog>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {...state.cart};
}

export default connect(mapStateToProps)(ShoppingCartModal)
