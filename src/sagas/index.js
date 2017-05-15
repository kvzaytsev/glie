import { call, put, takeEvery, takeLatest, fork  } from 'redux-saga/effects';

import { PROJECT_DATA_REQUESTED,PROJECT_DATA_SUCCEEDED, MILESTONES_REQUESTED, ISSUES_REQUESTED } from '../events';

import getProjectData from './project.saga';
import getMilestones from './milestones.saga';
import getIssues from './issues.saga';

export default function* rootSaga() {
  yield [
    takeEvery(PROJECT_DATA_REQUESTED, getProjectData),
    takeEvery(ISSUES_REQUESTED, getIssues),
    takeLatest(PROJECT_DATA_SUCCEEDED, getMilestones)
  ]
}
