import {
  FETCH_MATCHUP_DATA_SUCCESS,
  FETCH_MATCHUP_DATA_ERROR
} from '../actions/matchups';

const initialState = {
  matchups: [],
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_MATCHUP_DATA_SUCCESS) {
    return Object.assign({}, state, {
      matchups: action.data,
      error: null
    });
  }
  if (action.type === FETCH_MATCHUP_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
};