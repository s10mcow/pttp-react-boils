// @flow
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { toastr } from 'react-redux-toastr';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import SagaManager from './sagas';

// MIDDLEWARES
export const history = createBrowserHistory();
const router = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    console.error(error);
    if (process.env.NODE_ENV === 'development') {
      toastr.error(error.message);
    }
  },
});

const createReducer = (reducer: typeof rootReducer): typeof rootReducer => {
  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'],
  };

  return persistReducer(persistConfig, connectRouter(history)(reducer));
};

// STORE
export const store = createStore(
  createReducer(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    sagaMiddleware,
    router
    // createRavenMiddleware(Raven)
  )
);

// SAGAS
SagaManager.startSagas(sagaMiddleware);

export default () => {
  if (process.env.NODE_ENV === 'development') {

    if ((module: any).hot) {
      (module: any).hot.accept('./reducers', () =>
        store.replaceReducer(createReducer(require('./reducers').default))
      );

      (module: any).hot.accept('./sagas', () => {
        SagaManager.cancelSagas(store);
        require('./sagas').default.startSagas(sagaMiddleware);
      });
    }
  }

  const persistor = persistStore(store);
  return { store, persistor };
};
