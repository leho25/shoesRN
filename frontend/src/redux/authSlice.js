import {createSlice} from '@reduxjs/toolkit';
import {login, register} from './apiRequests';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    msg: '',
    msgRegister: '',
  },
  extraReducers: builders => {
    builders.addCase(login.pending, state => {
      state.isFetching = true;
    });
    builders.addCase(login.fulfilled, (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    });
    builders.addCase(login.rejected, (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.msg = action.payload;
    });
    builders.addCase(register.pending, state => {
      state.pending = true;
    });
    builders.addCase(register.fulfilled, (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.msgRegister = action.payload;
    });
    builders.addCase(register.rejected, (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.msgRegister = action.payload;
    });
  },
});

export default authSlice.reducer;
