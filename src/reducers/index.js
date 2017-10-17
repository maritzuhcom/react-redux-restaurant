import { combineReducers } from 'redux';
import overlays from './overlays';
import food from './food';

const rootReducer = combineReducers({
  overlays: overlays,
  food: food
});

export default rootReducer;
