import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/main';


const sagaMiddleware = createSagaMiddleware();
const initialState = {
  projectId: null
};

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'PROJECT_DATA.SUCCEEDED':
      return { ...state, projectId: payload.id }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;