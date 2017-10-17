export const GET_BREAKFAST= 'GET_BREAKFAST';
export const GET_LUNCH = 'GET_LUNCH';
export const GET_DINNER = 'GET_DINNER';

import {foodItems} from '../config/foodItems';

export function getLunch() {
  console.log('getting lunch');
  return {
    type: GET_LUNCH
  };
}

export function getBreakfast() {
  console.log('getting breakfast');
  return {
    type: GET_BREAKFAST
  };
}

export function getDinner() {
  console.log('getting dinner');
  return {
    type: GET_DINNER
  };
}
