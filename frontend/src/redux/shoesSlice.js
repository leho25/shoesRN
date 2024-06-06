import {createSlice} from '@reduxjs/toolkit';
import {getAllShoes} from './apiRequests';

export const shoesSlice = createSlice({
  name: 'shoes',
  initialState: {
    shoes: [],
    pending: false,
    error: false,
  },
  extraReducers: builder => {
    builder.addCase(getAllShoes.pending, state => {
      state.pending = true;
    });
    builder.addCase(getAllShoes.fulfilled, (state, action) => {
      state.pending = false;
      state.shoes = action.payload;
    });
    builder.addCase(getAllShoes.rejected, state => {
      state.pending = false;
      state.error = true;
    });
    
  },
});

export default shoesSlice.reducer;
