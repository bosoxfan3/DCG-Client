import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_MATCHUP_DATA_SUCCESS = 'FETCH_MATCHUP_DATA_SUCCESS';
export const fetchMatchupDataSuccess = data => ({
  type: FETCH_MATCHUP_DATA_SUCCESS,
  data
});

export const FETCH_MATCHUP_DATA_ERROR = 'FETCH_MATCHUP_DATA_ERROR';
export const fetchMatchupDataError = error => ({
  type: FETCH_MATCHUP_DATA_ERROR,
  error
});

export const fetchMatchupData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/matchups`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(fetchMatchupDataSuccess(data)))
  .catch(err => {
    dispatch(fetchMatchupDataError(err));
  });
};