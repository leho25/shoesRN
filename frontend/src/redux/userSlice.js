import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Nike',
    price: 10000,
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: state => {
      state.pending = true;
    },
    updateError: state => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
    },
  },
});

export const {updateStart, updateError,updateSuccess} = userSlice.reducer;

export default userSlice.reducer;
