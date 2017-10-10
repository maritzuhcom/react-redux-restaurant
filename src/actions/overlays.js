export const HOME_DRAWER = 'HOME_DRAWER';

export function toggleHomeDrawer(value) {
  return {
    type: HOME_DRAWER,
    payload: value
  }
}
