import {createSlice} from '@reduxjs/toolkit';
import {addToCart} from './apiRequests';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    isFetching: false,
    isError: false,
  },
  // reducers: {
  //   addToCart: (state, action) => {
  //     const itemPresent = state.cart.find(
  //       item => item.id === action.payload.id,
  //     );

  //     if (itemPresent) {
  //       itemPresent.quality++;
  //     } else {
  //       state.cart.push({...action.payload, quality: 1});
  //     }
  //   },
  //   removeFromCart: (state, action) => {
  //     const removedItem = state.cart.filter(item => {
  //       item.id !== action.payload.id;
  //     });
  //     state.cart = removedItem;
  //   },
  //   incrementQuality: (state, action) => {
  //     const itemPresent = state.cart.find(
  //       item => item.id === action.payload.id,
  //     );
  //     itemPresent.quality++;
  //   },
  //   decrementQuality: (state, action) => {
  //     const itemPresent = state.cart.find(
  //       item => item.id === action.payload.id,
  //     );
  //     if (itemPresent.quality === 1) {
  //       itemPresent.quality = 0;
  //       const removedItem = state.cart.filter(item => {
  //         item.id !== action.payload.id;
  //       });
  //       state.cart = removedItem;
  //     } else {
  //       itemPresent.quality--;
  //     }
  //   },
  //   clearCart: (state, action) => {
  //     state.cart = [];
  //   },
  // },
  extraReducers: builders => {
    builders.addCase(addToCart.pending, state => {
      state.isFetching = true;
    });
    builders.addCase(addToCart.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = [...action.payload];
    });
    builders.addCase(addToCart.rejected, state => {
      state.isFetching = false;
      state.isError = true;
    });
  },
});

// export const {
//   addToCart,
//   removeFromCart,
//   incrementQuality,
//   decrementQuality,
//   clearCart,
// } = cartSlice.actions;
export default cartSlice.reducer;
