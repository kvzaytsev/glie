import { call, put, takeEvery, take, select } from 'redux-saga/effects';

import { PROJECT_DATA_SUCCEEDED, MILESTONES_REQUESTED, MILESTONES_SUCCEEDED, MILESTONES_FAILED } from '../events';
import { fetchMilestones } from '../api';

export default function* getMilestones(action) {
  const project = yield select(state => state.project);
  const apiToken = yield select(state => state.apiToken);

  try {  
    const data = yield call(fetchMilestones, { apiKey: apiToken, projectId: project.id });
    const payload = yield data.json();
    yield put({ type: MILESTONES_SUCCEEDED, payload });
  } catch (error) {
    yield put({ type: MILESTONES_FAILED, error });
  }
}