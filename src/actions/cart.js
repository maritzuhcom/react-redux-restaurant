export const ADD_TO_CART = 'ADD_TO_CART';
export const CART_MODAL = 'CART_MODAL';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

export function cartModal(isOpen) {
  return {
  type: CART_MODAL,
  payload: isOpen
  }
};


/*
sample data
  {
    item: 'eggs',
    price: 2.00
  }
 */
