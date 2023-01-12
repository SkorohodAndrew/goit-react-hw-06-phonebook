import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {},
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});
