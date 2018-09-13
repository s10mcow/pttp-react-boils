// @flow
import { put, takeLatest } from 'redux-saga/effects';
import { APP_LOADERS } from '../../constants';
import actions, { APP_INIT } from './app.action';
import type { Saga } from 'redux-saga';

function* appInitWorker(): Saga<void> {
  yield put(actions.addLoader(APP_LOADERS.appInit));
  //Do init stuff here
  yield put(actions.removeLoader(APP_LOADERS.appInit));
  yield put(actions.setAppStatusInitialized());
}

export function* appInitListener(): Saga<void> {
  yield takeLatest(APP_INIT, appInitWorker);
}

export default [appInitListener];
