import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProjectData } from '../api';

export default function* rootSaga() {
  yield [
    watchFetchData()
  ]
}

export function* fetchData(action) {
  try {
    const data = yield call(fetchProjectData, action.payload);
    const payload = yield data.json();
    yield put({ type: "PROJECT_DATA.SUCCEEDED", payload });
  } catch (error) {
    yield put({ type: "PROJECT_DATA.FAILED", error });
  }
}

function* watchFetchData() {
  yield takeEvery('PROJECT_DATA.REQUESTED', fetchData);
}


