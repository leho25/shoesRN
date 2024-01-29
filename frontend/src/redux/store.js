import {configureStore} from '@reduxjs/toolkit';
import shoesReducer from './shoesSlice';

export default configureStore({
  reducer: {
    shoes: shoesReducer,
  },
});
