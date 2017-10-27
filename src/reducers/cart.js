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
      //copies the array from the state
      const newOrders = state.orders.slice();
      //update the order for the new array we copies from state
      newOrders.push(action.payload.item);
      //add them
      const newPrice = state.price + action.payload.price;

      const data = {
        orders: newOrders,
        price: newPrice
      }
      //returns the entire state, and ...data overides the portion of state that is defined in the data object (orders and price)
      //... is a operator that spreads out the object
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
