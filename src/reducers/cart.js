import {ADD_TO_CART, TOGGLE_CART_DRAWER} from '../actions/cart';

//redux state

const defaultState = {
  orders: [],
  price: 0.00,
  drawerOpen: false
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
    case TOGGLE_CART_DRAWER: {
      const data = {
        drawerOpen: action.payload
      }

      return {...state, ...data};
    }
    default: {
      break;
    }
  }

  return {...state};
}
