import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = data => ({
  type: GET_USER_SUCCESS,
  data
});

export const GET_USER_ERROR = 'GET_USER_ERROR';
export const getUserError = error => ({
  type: GET_USER_ERROR,
  error
});

export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const getAllUsersSuccess = data => ({
  type: GET_ALL_USERS_SUCCESS,
  data
});

export const GET_ALL_USERS_ERROR = 'GET_ALL_USERS_ERROR';
export const getAllUsersError = error => ({
  type: GET_ALL_USERS_ERROR,
  error
});

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

export const UPDATE_SCORES_SUCCESS = 'UPDATE_SCORES_SUCCESS';
export const updateScoresSuccess = data => ({
  type: UPDATE_SCORES_SUCCESS,
  data
});

export const UPDATE_SCORES_ERROR = 'UPDATE_SCORES_ERROR';
export const updateScoresError = error => ({
  type: UPDATE_SCORES_ERROR,
  error
});

export const updateScores = users => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(users);
  return fetch(`${API_BASE_URL}/users/scores`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)
  })
  .then(console.log(JSON.stringify(users)))
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => dispatch(updateScoresSuccess(data)))
  .catch(err => {
    dispatch(updateScoresError(err));
  });
};

export const getUser = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const username = getState().auth.currentUser.username;
  return fetch(`${API_BASE_URL}/users/${username}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(getUserSuccess(data)))
  .catch(err => {
    dispatch(getUserError(err));
  });
};

export const getAllUsers = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/all`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(getAllUsersSuccess(data)))
  .catch(err => {
    dispatch(getAllUsersError(err));
  });
};

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