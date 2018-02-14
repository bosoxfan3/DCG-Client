import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const MAKE_PICKS_SUCCESS = 'MAKE_PICKS_SUCCESS';
export const makePicksSuccess = data => ({
  type: MAKE_PICKS_SUCCESS,
  data
});

export const MAKE_PICKS_ERROR = 'MAKE_PICKS_ERROR';
export const makePicksError = error => ({
  type: MAKE_PICKS_ERROR,
  error
});

export const makePicks = values => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const username = getState().auth.currentUser.username;
  return fetch(`${API_BASE_URL}/users/picks/${username}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(makePicksSuccess(data)))
  .catch(err => {
    dispatch(makePicksError(err));
  });
};