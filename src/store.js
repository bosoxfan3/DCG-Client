import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import matchupsReducer from './reducers/matchups';
import usersReducer from './reducers/users';
import { setAuthToken } from './actions/auth';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    matchups: matchupsReducer,
    users: usersReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;