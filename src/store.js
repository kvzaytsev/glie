import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import * as reducers from './reducers';

import { PROJECT_DATA_SUCCEEDED, TOKEN_ACCEPTED } from './events';

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  project: null,
  apiToken: null,
  issues: [],
  milestones: []
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;