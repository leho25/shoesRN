import {createSlice} from '@reduxjs/toolkit';
import {addShoes} from './apiRequests';

const addShoesSlice = createSlice({
  name: 'addShoes',
  initialState: {
    shoes: {
      addShoes: null,
      isFetching: false,
      isError: false,
    },
  },
  extraReducers: builders => {
    builders.addCase(addShoes.pending, state => {
      state.shoes.isFetching = true;
    });
    builders.addCase(addShoes.fulfilled, (state, action) => {
      state.shoes.isFetching = false;
      state.shoes.addShoes = action.payload;
    });
    builders.addCase(addShoes.rejected, state => {
      state.shoes.isFetching = false;
      state.shoes.isError = true;
    });
  },
});

export default addShoesSlice.reducer;
