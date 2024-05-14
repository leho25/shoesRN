import {createSlice} from '@reduxjs/toolkit';
import {order} from './apiRequests';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: {
      getAllOrder: [],
      isFetching: false,
      isError: false,
    },
  },
  extraReducers: builders => {
    builders.addCase(order.pending, state => {
      state.order.isFetching = true;
      state.order.isError = false;
    });
    builders.addCase(order.fulfilled, (state, action) => {
      state.order.isFetching = false;
      state.order.getAllOrder = action.payload;
    });
    builders.addCase(order.rejected, (state, action) => {
      state.order.isFetching = false;
      state.order.isError = true;
    });
  },
});

export default orderSlice.reducer;
