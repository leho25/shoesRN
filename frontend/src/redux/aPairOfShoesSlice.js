import {createSlice} from '@reduxjs/toolkit';
import { aPairOfShoes } from './apiRequests';

const aPairOfShoesSlice = createSlice({
  name: 'aPairOfShoes',
  initialState: {
    aPairOfShoes: {},
    pending: false,
    error: false,
  },
  extraReducers: builder => {
    builder.addCase(aPairOfShoes.pending, state => {
      state.pending = true;
    });
    builder.addCase(aPairOfShoes.fulfilled, (state, action) => {
      state.pending = false;
      state.aPairOfShoes = action.payload;
    });
    builder.addCase(aPairOfShoes.rejected, state => {
      state.pending = false;
      state.error = true;
    });
  },
});

export default aPairOfShoesSlice.reducer;
