import {configureStore} from '@reduxjs/toolkit';
import shoesReducer from './shoesSlice';
import aPairOfShoesReducer from './aPairOfShoesSlice';
import authReducer from './authSlice'

export default configureStore({
  reducer: {
    shoes: shoesReducer,
    aPairOfShoes: aPairOfShoesReducer,
    auth: authReducer,
  },
});
