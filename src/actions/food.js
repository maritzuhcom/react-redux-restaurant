export const GET_BREAKFAST= 'GET_BREAKFAST';
export const GET_LUNCH = 'GET_LUNCH';
export const GET_DINNER = 'GET_DINNER';

import { foodItems } from '../config/foodItems';

export function getLunch() {
  // TODO filter the lunches
  return {
    type: GET_LUNCH
  };
}

export function getBreakfast() {
  const breakfasts = foodItems.filter((item) => {
    return item.type === 'breakfast';
  });

  return {
    type: GET_BREAKFAST,
    payload: breakfasts
  };
}

export function getDinner() {
  // TODO filter the dinners
  return {
    type: GET_DINNER
  };
}
