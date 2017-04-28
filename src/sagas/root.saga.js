import { call, put, takeEvery } from 'redux-saga/effects';

import { PROJECT_DATA_SUCCEEDED, PROJECT_DATA_FAILED, PROJECT_DATA_REQUESTED, TOKEN_ACCEPTED } from '../events';
import watchGetProjectData from './project.saga';
import watchGetMilestones from './milestones.saga';

export default function* rootSaga() {
  yield [
    watchGetProjectData(),
    watchGetMilestones()
  ]
}
