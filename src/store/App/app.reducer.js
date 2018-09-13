// @flow
import type { AppStateType } from '../../types';
import {
  APP_SET_INITIALIZED,
  APP_ADD_LOADER,
  APP_REMOVE_LOADER,
  type AnyAppActionType,
} from './app.action';

const initialState: AppStateType = {
  loaders: [],
  appInitialized: false,
};

const appReducer = (
  state: AppStateType = initialState,
  action: AnyAppActionType
): AppStateType => {
  switch (action.type) {
    case APP_ADD_LOADER:
      return Object.assign({}, state, {
        loaders: [...state.loaders, action.key],
      });
    case APP_REMOVE_LOADER:
      const key = action.key;
      return Object.assign({}, state, {
        loaders: state.loaders.filter(loader => loader !== key),
      });
    case APP_SET_INITIALIZED:
      return Object.assign({}, state, { appInitialized: true });
    default:
      return state;
  }
};

export default appReducer;
