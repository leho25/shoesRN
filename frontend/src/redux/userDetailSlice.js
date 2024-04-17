import {createSlice} from '@reduxjs/toolkit';
import {getUser} from './apiRequests';

const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState: {
    userDetail: {
      getUser: null,
      pending: false,
      error: false,
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.userDetail.pending = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userDetail.pending = false;
      state.userDetail.getUser = action.payload;
    });
    builder.addCase(getUser.rejected, state => {
      state.userDetail.pending = false;
      state.userDetail.error = true;
    });
  },
});
export default userDetailSlice.reducer;
