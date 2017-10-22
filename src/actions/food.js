export const GET_BREAKFAST= 'GET_BREAKFAST';
export const GET_LUNCH = 'GET_LUNCH';
export const GET_DINNER = 'GET_DINNER';

import { foodItems } from '../config/foodItems';


export function getBreakfast() {
  const breakfasts = foodItems.filter((item) => {
    return item.type === 'breakfast';
  });
  return {
    type: GET_BREAKFAST,
    payload: breakfasts
  };
}

export function getLunch() {
  const lunches = foodItems.filter((item) => {
    return item.type === 'lunch';
  });
  return {
    type: GET_LUNCH,
    payload: lunches
  };
}

export function getDinner() {
  const dinners = foodItems.filter((item) => {
    return item.type === 'dinner';
  });
  return {
    type: GET_DINNER,
    payload: dinners
  };
}
