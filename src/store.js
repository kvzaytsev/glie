import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {
  projectId: null
};

/**Stub for reducer */
const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const store = createStore(
  reducer, 
  initialState, 
  applyMiddleware(sagaMiddleware)
);

export default store;