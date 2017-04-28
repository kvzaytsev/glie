import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';
import * as reducers from './reducers';

import { PROJECT_DATA_SUCCEEDED, TOKEN_ACCEPTED } from './events';

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  project: null,
  apiToken: null
};

const store = createStore(
  combineReducers(reducers),
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;