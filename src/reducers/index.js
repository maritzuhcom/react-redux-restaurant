import { combineReducers } from 'redux';
import overlays from './overlays';

const rootReducer = combineReducers({
  overlays: overlays
});

export default rootReducer;
