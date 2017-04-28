import { call, put, takeEvery } from 'redux-saga/effects';

import { MILESTONES_REQUESTED, MILESTONES_SUCCEEDED, MILESTONES_FAILED } from '../events';
import { fetchMilestones } from '../api';

function* getMilestones(action) {
  try {
    const data = yield call(fetchMilestones, action.payload);
    const payload = yield data.json();
    yield put({ type: MILESTONES_SUCCEEDED, payload });
  } catch (error) {
    yield put({ type: MILESTONES_FAILED, error });
  }
}

export default function* watchGetMilestones() {
  yield takeEvery(MILESTONES_REQUESTED, getMilestones);
}