export const CHANGE_AUTH = 'CHANGE_AUTH';

export function authenticate() {
  return {
    action: CHANGE_AUTH,
    payload: {authenticated: true}
  };
}
