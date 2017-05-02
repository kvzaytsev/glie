import { call, put, takeEvery, takeLatest, fork  } from 'redux-saga/effects';

import { PROJECT_DATA_REQUESTED,PROJECT_DATA_SUCCEEDED, MILESTONES_REQUESTED } from '../events';

import getProjectData from './project.saga';
import getMilestones from './milestones.saga';

export default function* rootSaga() {
  yield [
    takeEvery(PROJECT_DATA_REQUESTED, getProjectData),
    takeLatest(PROJECT_DATA_SUCCEEDED, getMilestones)
  ]
}
