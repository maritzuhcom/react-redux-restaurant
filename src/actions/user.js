import axios from 'axios'
export const CHANGE_AUTH = 'CHANGE_AUTH';

export function authenticate() {
  return {
    action: CHANGE_AUTH,
    payload: {authenticated: true}
  };
}

export const checkAuth = () => (dispatch) => {
  return new Promise(function(resolve, reject) {
    axios.get(`http://wcng.user.backstage.mediaplatformdev.com/user/me`, {
      headers: {'Content-Type': 'application/json'},
      withCredentials: true
    }).then(res => {
      if(res.status >= 200 && res.status < 300) {
        dispatch({
          type: CHANGE_AUTH,
          payload: true
        });
        resolve();
        return;
      }
      dispatch({
        type: CHANGE_AUTH,
        payload: false
      });
      reject();
    }).catch(err => {
      console.error(err);
      dispatch({
        type: CHANGE_AUTH,
        payload: false
      });
      reject(err);
    });
  });
  // TODO make a request to http://wcng.user.backstage.mediaplatformdev.com/user/me and check

}
