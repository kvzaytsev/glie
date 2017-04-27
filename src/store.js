import {createStore} from 'redux';

const initialState = {
  projectId: null
};

/**Stub for reducer */
const reducer = (state={}, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;