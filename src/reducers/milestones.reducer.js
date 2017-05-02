import { MILESTONES_SUCCEEDED } from '../events';

const malistonesReducer = (state = {}, { type, payload }) => type === MILESTONES_SUCCEEDED ? payload : state;

export default malistonesReducer;