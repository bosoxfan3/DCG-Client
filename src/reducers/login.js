import { SET_AUTH_TOKEN, SET_CURRENT_USER } from '../actions/login';

const initialState = {
  authToken: null,
  currentUser: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === SET_CURRENT_USER) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    });
  }
  return state;
}