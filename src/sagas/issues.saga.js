import { call, put, select } from 'redux-saga/effects';

import { ISSUES_SUCCEEDED, ISSUES_FAILED } from '../events';
import { fetchIssues } from '../api';

export default function* getIssues(action) {
  const project = yield select(state => state.project);
  const apiToken = yield select(state => state.apiToken);

  try {  
    const payload = yield call(fetchIssues, {
      projectId: project.id,
      apiKey: apiToken,
      milestone: action.payload.milestoneText,
      includeComments: action.payload.includeComments
    });
    yield put({ type: ISSUES_SUCCEEDED, payload });
  } catch (error) {
    
    yield put({ type: ISSUES_FAILED, error });
  }
}