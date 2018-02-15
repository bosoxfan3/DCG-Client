import { 
  SET_AUTH_TOKEN, 
  SET_CURRENT_USER,
  TOGGLE_LOGIN_FORM,
  TOGGLE_SIGNUP_FORM 
} from '../actions/login';

const initialState = {
  authToken: null,
  currentUser: null,
  showLoginForm: false,
  showSignupForm: false,
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } 
  else if (action.type === SET_CURRENT_USER) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    });
  }
  else if (action.type === TOGGLE_LOGIN_FORM) {
    return Object.assign({}, state, {
      showLoginForm: !state.showLoginForm
    });
  }
  else if (action.type === TOGGLE_SIGNUP_FORM) {
    return Object.assign({}, state, {
      showSignupForm: !state.showSignupForm
    });
  }
  return state;
};