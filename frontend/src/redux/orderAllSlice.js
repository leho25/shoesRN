import {createSlice} from '@reduxjs/toolkit';
import {getAllOrder} from './apiRequests';

const orderSlice = createSlice({
  name: 'getAllOrder',
  initialState: {
    getAllOrder: {
      getAll: [],
      isFetching: false,
      isError: false,
    },
  },
  extraReducers: builders => {
    builders.addCase(getAllOrder.pending, state => {
      state.getAllOrder.isFetching = true;
      state.getAllOrder.isError = false;
    });
    builders.addCase(getAllOrder.fulfilled, (state, action) => {
      state.getAllOrder.isFetching = false;
      state.getAllOrder.getAll = action.payload;
    });
    builders.addCase(getAllOrder.rejected, (state, action) => {
      state.getAllOrder.isFetching = false;
      state.getAllOrder.isError = true;
    });
  },
});

export default orderSlice.reducer;
