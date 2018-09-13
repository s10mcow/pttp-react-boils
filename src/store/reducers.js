// @flow
import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import app from './App/app.reducer';

const rootReducer = combineReducers({
  toastr,
  app,
});

export default rootReducer;
