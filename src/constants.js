// @flow
export const APP_LOADERS = Object.freeze({
  appInit: 'appInit',
});

export type AppLoader = $Values<typeof APP_LOADERS>;
