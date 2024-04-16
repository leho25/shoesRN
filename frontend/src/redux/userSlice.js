import {createSlice} from '@reduxjs/toolkit';
import {getAllUser, getUser} from './apiRequests';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      getCurrentUser: [],
      isLoading: false,
      error: false,
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllUser.pending, state => {
      state.user.isLoading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.user.isLoading = false;
      state.user.getCurrentUser = action.payload;
    });
    builder.addCase(getAllUser.rejected, state => {
      state.user.isLoading = false;
      state.user.error = true;
    });
  },
});
export default userSlice.reducer;
