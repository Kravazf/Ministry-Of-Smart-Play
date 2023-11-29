import { createSlice } from '@reduxjs/toolkit';
import { modulName } from './constans';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  tests: [],
  filter: '',
  filteredTests: '',
};

export const testsReduser = createSlice({
  name: modulName,
  initialState,
  reducers: {
    updateFavoriteTestsState: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.tests = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.filter = payload;
      // eslint-disable-next-line no-param-reassign
      state.filteredTests = state.tests.filter((test) => {
        const testInitial = test.name.toLowerCase();
        return testInitial.indexOf(payload.toLowerCase()) !== -1;
      });
    });
    builder.addCase(thunks.fetchTests.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.tests = payload;
    });
    builder.addCase(thunks.deleteTest.fulfilled, (state, { payload: testId }) => {
      // eslint-disable-next-line no-param-reassign
      state.tests = state.tests.filter((test) => test.id !== testId);
    });
    builder.addCase(actions.toggleFavoriteAction, (state, action) => {
      const testId = action.payload;
      const updatedTests = state.tests.map((test) => (
        test.id === testId ? { ...test, Favorite: !test.Favorite } : test));
      // eslint-disable-next-line no-param-reassign
      state.tests = updatedTests;
    });
  },
});

export default testsReduser.reducer;
