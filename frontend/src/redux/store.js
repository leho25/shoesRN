import {combineSlices, configureStore} from '@reduxjs/toolkit';
import shoesReducer from './shoesSlice';
import aPairOfShoesReducer from './aPairOfShoesSlice';
import authReducer from './authSlice';
import userReducer from './userSlice';
import userDetailReducer from './userDetailSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineSlices({
  shoes: shoesReducer,
  aPairOfShoes: aPairOfShoesReducer,
  auth: authReducer,
  users: userReducer,
  userDetails: userDetailReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
