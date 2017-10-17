import {GET_BREAKFAST, GET_LUNCH, GET_DINNER} from '../actions/food';

const defaultState = {
  breakfast: [],
  lunch: [],
  dinner: []
}

// TODO add breakfast, lunch, dinner
export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_BREAKFAST: {
      console.log('getting breakfast 2');
      break;
    }
    case GET_LUNCH: {
      break;
    }
    case GET_DINNER: {
      break;
    }
    default: {
      return {...state}
    }
  }

  return {...state}
}
