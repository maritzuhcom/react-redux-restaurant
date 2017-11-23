export const ADD_TO_CART = 'ADD_TO_CART';
export const TOGGLE_CART_DRAWER = 'TOGGLE_CART_DRAWER';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

// updates redux state, functions that trigger updates in the redux state

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export function emptyCart() {
  return {
    type: EMPTY_CART
  };
}

export function toggleCartDrawer(isOpen) {
  return {
    type: TOGGLE_CART_DRAWER,
    payload: isOpen
  }
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  }
}
