import Cookies from 'js-cookie';

export const CHANGE_AUTH = 'CHANGE_AUTH';

export function authenticate() {
  return {
    action: CHANGE_AUTH,
    payload: {authenticated: true}
  };
}

export function checkAuth() {
  console.log(Cookies.get());

  return {
    type: CHANGE_AUTH,
    payload: {authenticated: true}
  };
}
