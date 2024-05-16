import {createSlice} from '@reduxjs/toolkit';
import {cartUser} from './apiRequests';

export const cartUserSlice = createSlice({
  name: 'cart',
  initialState: {
    cartUser: [],
    isFetching: false,
    isError: false,
  },
  extraReducers: builders => {
    builders.addCase(cartUser.pending, state => {
      state.isFetching = true;
    });
    builders.addCase(cartUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cartUser = action.payload;
    });
    builders.addCase(cartUser.rejected, state => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

export default cartUserSlice.reducer;
