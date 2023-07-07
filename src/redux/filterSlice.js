import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
        return state = action.payload;
    },
  },
});

export const setFilter = filterSlice.actions.setFilter;

export const filterReducer = filterSlice.reducer;
