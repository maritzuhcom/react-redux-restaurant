import {ADD_TO_CART} from '../actions/cart';

const defaultState = {
  orders: [],
  price: 0.00
}

export default function(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART: {
      const newOrders = state.orders.slice();
      newOrders.push(action.payload.item);

      const newPrice = state.price + action.payload.price;

      const data = {
        orders: newOrders,
        price: newPrice
      }
      return {...data}
    }
    default: {
      break;
    }
  }

  return {...state};
}
