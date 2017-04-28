import { PROJECT_DATA_SUCCEEDED } from '../events';

const projectReducer = (state = {}, { type, payload }) => type === PROJECT_DATA_SUCCEEDED ? payload : state;

export default projectReducer;