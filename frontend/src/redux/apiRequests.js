import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllShoes = createAsyncThunk('getAllShoes', async () => {
  const res = await axios.get('http://10.10.55.54:3000/v1/shoes');
  return res.data;
});
export const aPairOfShoes = createAsyncThunk('aPairOfShoes', async shoesId => {
  const res = await axios.get(`http://10.10.55.54:3000/v1/shoes/${shoesId}`);
  return res.data;
});
export const getUser = createAsyncThunk('getUser', async userId => {
  const res = await axios.get(`http://10.10.55.54:3000/v1/user/${userId}`);
  return res.data;
});
// export const getAllUser = createAsyncThunk('getAllUser', async accessToken => {
//   const res = await axios.get('http://10.10.55.54:3000/v1/user', {
//     headers: {token: `Bearer ${accessToken}`},
//   });
//   return res.data;
// });
export const getAllUser = createAsyncThunk('getAllUser', async () => {
  const res = await axios.get('http://10.10.55.54:3000/v1/user');
  return res.data;
});
export const login = createAsyncThunk(
  'login',
  async (user, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        'http://10.10.55.54:3000/v1/auth/login',
        user,
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const register = createAsyncThunk(
  'register',
  async (user, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        'http://10.10.55.54:3000/v1/auth/register',
        user,
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const order = createAsyncThunk('order', async orderData => {
  const res = await axios.post('http://10.10.55.54:3000/v1/orders', orderData);
  return res.data;
});
export const getAllOrder = createAsyncThunk('getAllOrder', async () => {
  const res = await axios.get('http://10.10.55.54:3000/v1/orders');
  return res.data;
});
export const cartUser = createAsyncThunk('cartUser', async userId => {
  const res = await axios.get(`http://10.10.55.54:3000/v1/cart/${userId}`);
  return res.data;
});
export const addToCart = createAsyncThunk('addToCart', async data => {
  const res = await axios.post(`http://10.10.55.54:3000/v1/cart`, data);
  return res.data;
});
export const addShoes = createAsyncThunk('addShoes', async data => {
  const res = await axios.post(`http://10.10.55.54:3000/v1/shoes`, data);
  return res.data;
});
export const updateShoes = createAsyncThunk(
  'updateShoes',
  async (id, update) => {
    const res = await axios.put(
      `http://10.10.55.54:3000/v1/shoes/${id}`,
      update,
    );
    console.log('123', res.data);
  },
);

export const deleteShoes = createAsyncThunk('deleteShoes', async id => {
  const res = await axios.delete(`http://10.10.55.54:3000/v1/shoes/${id}`);
  return res.data;
});
