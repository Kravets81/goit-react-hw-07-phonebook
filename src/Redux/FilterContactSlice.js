import { createSlice } from '@reduxjs/toolkit';

export const filterContactsSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilterValue } = filterContactsSlice.actions;
export const filterContactsReducer = filterContactsSlice.reducer;
