import { createAction } from '@reduxjs/toolkit';
import { modulName } from './constans';

const filterAction = createAction(`${modulName}/filterAction`, (payload) => ({ payload }));
const toggleFavoriteAction = createAction(`${modulName}/toggleFavorite`, (testId) => ({ payload: testId }));
export const updateFavoriteTestsState = createAction('tests/updateFavoriteTestsState');

export default {
  filterAction,
  toggleFavoriteAction,
};
