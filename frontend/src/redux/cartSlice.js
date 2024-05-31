import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (!Array) {
        state.cart = [];
      }
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );

      if (itemPresent?.id && itemPresent?.userId) {
        itemPresent.quality++;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      console.log('Removing item with id:', action.payload); // Debug log
      state.cart = state.cart.filter(item => item.id !== action.payload);
      console.log('Updated items:', state.cart); // Debug log
      // state.cart = removedItem;
    },
    incrementQuality: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      itemPresent.quality++;
    },
    decrementQuality: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent.quality === 1) {
        itemPresent.quality = 0;
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      } else {
        itemPresent.quality--;
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
  // extraReducers: builders => {
  //   builders.addCase(addToCart.pending, state => {
  //     state.isFetching = true;
  //   });
  //   builders.addCase(addToCart.fulfilled, (state, action) => {
  //     state.isFetching = false;
  //     state.cart = action.payload;
  //   });
  //   builders.addCase(addToCart.rejected, state => {
  //     state.isFetching = false;
  //     state.isError = true;
  //   });
  // },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuality,
  decrementQuality,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
