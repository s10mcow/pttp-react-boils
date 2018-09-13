// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from 'styled-components';
import baseStyles from './base-styles';
import './index.css';
import Routes from './Routes';
import getStoreAndPersistor, { history } from './store/store';
import theme from './styles/1-settings/theme';

const { store, persistor } = getStoreAndPersistor();

const Application = () => {
  baseStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading="loading..." persistor={persistor}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

export default Application;
