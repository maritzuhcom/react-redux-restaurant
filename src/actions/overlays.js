export const HOME_DRAWER = 'HOME_DRAWER';

export function toggleHomeDrawer(value) {
  return {
    action: HOME_DRAWER,
    payload: value
  }
}
