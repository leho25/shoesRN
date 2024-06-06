import {createSlice} from '@reduxjs/toolkit';
import {addShoes, updateShoes, deleteShoes} from './apiRequests';

const addShoesSlice = createSlice({
  name: 'addShoes',
  initialState: {
    shoes: {
      addShoes: [],
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
    builders.addCase(updateShoes.pending, state => {
      state.shoes.isFetching = true;
    });
    builders.addCase(updateShoes.fulfilled, (state, action) => {
      state.shoes.isFetching = false;
      state.shoes.addShoes = [...state.shoes.addShoes, action.payload];
    });
    builders.addCase(updateShoes.rejected, state => {
      state.shoes.isFetching = false;
      state.shoes.isError = true;
    });
    builders.addCase(deleteShoes.pending, state => {
      state.shoes.isFetching = true;
    });
    builders.addCase(deleteShoes.fulfilled, (state, action) => {
      state.shoes.isFetching = false;
      state.shoes.addShoes = [...state.shoes.addShoes, action.payload];
    });
    builders.addCase(deleteShoes.rejected, state => {
      state.shoes.isFetching = false;
      state.shoes.isError = true;
    });
  },
});

export default addShoesSlice.reducer;
