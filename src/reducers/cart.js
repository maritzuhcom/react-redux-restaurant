import {ADD_TO_CART, CART_MODAL} from '../actions/cart';

const defaultState = {
  orders: [],
  price: 0.00,
  modalOpen: false
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newOrders = state.orders.slice();
      newOrders.push(action.payload.item);

      const newPrice = state.price + action.payload.price;

      const data = {
        orders: newOrders,
        price: newPrice
      }
      return {...state, ...data};
    }
    case CART_MODAL: {
      const data = {
        modalOpen: action.payload
      }

      return {...state, ...data};
    }
    default: {
      break;
    }
  }

  return {...state};
}
