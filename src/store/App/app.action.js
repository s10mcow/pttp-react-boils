// @flow
import type { ExtractActionsType } from '../../types';
import type { AppLoader } from '../../constants';

export const APP_INIT: 'APP_INIT' = 'APP_INIT';
export const APP_SET_INITIALIZED: 'APP_SET_INITIALIZED' = 'APP_SET_INITIALIZED';
export const APP_ADD_LOADER: 'APP_ADD_LOADER' = 'APP_ADD_LOADER';
export const APP_REMOVE_LOADER: 'APP_REMOVE_LOADER' = 'APP_REMOVE_LOADER';

const actions = {
  addLoader(key: AppLoader) {
    return {
      type: APP_ADD_LOADER,
      key,
    };
  },
  removeLoader(key: AppLoader) {
    return {
      type: APP_REMOVE_LOADER,
      key,
    };
  },
  appInit() {
    return {
      type: APP_INIT,
    };
  },
  setAppStatusInitialized() {
    return {
      type: APP_SET_INITIALIZED,
    };
  },
};

export type AnyAppActionType = ExtractActionsType<typeof actions>;
export default actions;
