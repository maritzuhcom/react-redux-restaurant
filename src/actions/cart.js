export const ADD_TO_CART = 'ADD_TO_CART';
export const TOGGLE_CART_DRAWER = 'TOGGLE_CART_DRAWER';

// updates redux state, functions that trigger updates in the redux state

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

export function toggleCartDrawer(isOpen) {
  return {
    type: TOGGLE_CART_DRAWER,
    payload: isOpen
  }
};
