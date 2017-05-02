import { call, put, takeEvery } from 'redux-saga/effects';

import { PROJECT_DATA_SUCCEEDED, PROJECT_DATA_FAILED, PROJECT_DATA_REQUESTED, TOKEN_ACCEPTED } from '../events';
import { fetchProjectData } from '../api';

export default function* getProjectData(action) {
  try {
    const data = yield call(fetchProjectData, action.payload);
    const payload = yield data.json();
    yield put({ type: TOKEN_ACCEPTED, payload: action.payload.apiKey });
    yield put({ type: PROJECT_DATA_SUCCEEDED, payload });
  } catch (error) {
    yield put({ type: PROJECT_DATA_FAILED, error });
  }
}

function* watchGetProjectData() {
  yield takeEvery(PROJECT_DATA_REQUESTED, getProjectData);
}