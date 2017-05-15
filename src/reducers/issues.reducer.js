import { ISSUES_SUCCEEDED } from '../events';

const issuesReducer = (state = {}, { type, payload }) => type === ISSUES_SUCCEEDED ? payload : state;

export default issuesReducer;