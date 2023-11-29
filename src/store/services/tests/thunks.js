import { createAsyncThunk } from '@reduxjs/toolkit';
import { modulName } from './constans';
import { quizCardContent } from '../../../api/quiz-card-content/quiz-card-content';
import actions from './actions';

const fetchTests = createAsyncThunk(`${modulName}/fetchTests`, async (id) => {
  try {
    const response = await quizCardContent.get(id);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteTest = createAsyncThunk(`${modulName}/deleteTest`, async (testId, { rejectWithValue }) => {
  try {
    await quizCardContent.delete(testId);
    return testId;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const updateTest = createAsyncThunk('tests/updateTest', async ({ id, updatedData }) => {
  try {
    const response = await quizCardContent.update(id, updatedData);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

const toggleFavorite = createAsyncThunk(
  `${modulName}/toggleFavorite`,
  async (testId, { getState, dispatch }) => {
    const { tests } = getState().testsReduser;
    const testToUpdate = tests.find((test) => test.id === testId);

    if (testToUpdate) {
      const updatedTest = { ...testToUpdate, Favorite: !testToUpdate.Favorite };
      const response = await quizCardContent.update(testId, updatedTest);

      if (response) {
        dispatch(actions.toggleFavoriteAction(testId));
        const updatedTests = getState().testsReduser.tests;
        localStorage.setItem('favoriteTests', JSON.stringify(updatedTests));
      }
    }
  },
);

export default {
  fetchTests,
  deleteTest,
  updateTest,
  toggleFavorite,
};
