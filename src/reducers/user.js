import { CHANGE_AUTH } from '../actions/user';

const defaultState = {
  authenticated: false,
  user: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_AUTH: {
      const data = {
        authenticated: action.payload
      };
      return {...state, ...data}
    }
    default: {
      return {...state}
    }
  }
}
