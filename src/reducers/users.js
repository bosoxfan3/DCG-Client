import {
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  MAKE_PICKS_SUCCESS,
  MAKE_PICKS_ERROR
} from '../actions/picks';

const initialState = {
  user: null,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_USER_SUCCESS) {
    return Object.assign({}, state, {
      user: action.data,
      error: null
    });
  }
  else if (action.type === GET_USER_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  else if (action.type === MAKE_PICKS_SUCCESS) {
    return Object.assign({}, state, {
      user: action.data,
      error: null
    });
  }
  else if (action.type === MAKE_PICKS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};