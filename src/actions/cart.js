export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

/*
sample data
{
  item: 'eggs',
  price: 2.00
}
 */
