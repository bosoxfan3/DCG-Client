import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { loadAuthToken } from './local-storage';
import authReducer from './reducers/login';
import matchupsReducer from './reducers/matchups';
import { setAuthToken } from './actions/login';

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    matchups: matchupsReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;