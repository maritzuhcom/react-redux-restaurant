import { combineReducers } from 'redux';
import user from './user';
import overlays from './overlays';

const rootReducer = combineReducers({
  user: user,
  overlays: overlays
});

export default rootReducer;
