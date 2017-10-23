import { combineReducers } from 'redux';
import overlays from './overlays';
import food from './food';
import cart from './cart';

const rootReducer = combineReducers({
  overlays: overlays,
  food: food,
  cart: cart
});

export default rootReducer;
