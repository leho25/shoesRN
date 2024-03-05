import {configureStore} from '@reduxjs/toolkit';
import shoesReducer from './shoesSlice';
import aPairOfShoesReducer from './aPairOfShoesSlice';

export default configureStore({
  reducer: {
    shoes: shoesReducer,
    aPairOfShoes: aPairOfShoesReducer,
  },
});
