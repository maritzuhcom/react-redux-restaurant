import { HOME_DRAWER } from '../actions/overlays';

const defaultState = {
  homeDrawerOpen: true
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case HOME_DRAWER: {
      const data = {
        homeDrawerOpen: action.payload
      }
      return {...state, ...data};
    }
    default: {
      return {...state}
    }
  }
}
