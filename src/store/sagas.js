// @flow
import { take, fork, cancel } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import type { Store } from 'redux';
import appSaga from './App/app.saga';

export const CANCEL_SAGAS_HMR: 'CANCEL_SAGAS_HMR' = 'CANCEL_SAGAS_HMR';

const sagas = [...appSaga];

function createAbortableSaga(saga) {
  if (process.env.NODE_ENV === 'development') {
    return function* main(): Saga<*> {
      const sagaTask = yield fork(saga);

      yield take(CANCEL_SAGAS_HMR);
      yield cancel(sagaTask);
    };
  } else {
    return saga;
  }
}

const SagaManager = {
  startSagas(sagaMiddleware: *) {
    sagas.map(createAbortableSaga).forEach(saga => sagaMiddleware.run(saga));
  },

  cancelSagas(store: Store<*, *>) {
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
    });
  },
};

export default SagaManager;
