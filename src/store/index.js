import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { testsReduser } from './services/tests';

const rootReducer = combineReducers({
  testsReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
