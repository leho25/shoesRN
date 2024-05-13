import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllShoes = createAsyncThunk('getAllShoes', async () => {
  const res = await axios.get('http://192.168.1.5:3000/v1/shoes');
  return res.data;
});
export const aPairOfShoes = createAsyncThunk('aPairOfShoes', async shoesId => {
  const res = await axios.get(`http://192.168.1.5:3000/v1/shoes/${shoesId}`);
  return res.data;
});
export const getUser = createAsyncThunk('getUser', async userId => {
  const res = await axios.get(`http://192.168.1.5:3000/v1/user/${userId}`);
  return res.data;
});
export const getAllUser = createAsyncThunk('getAllUser', async accessToken => {
  const res = await axios.get('http://192.168.1.5:3000/v1/user', {
    headers: {token: `Bearer ${accessToken}`},
  });
  return res.data;
});
export const login = createAsyncThunk(
  'login',
  async (user, {rejectWithValue}) => {
    try {
      const res = await axios.post(
        'http://192.168.1.5:3000/v1/auth/login',
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
        'http://192.168.1.5:3000/v1/auth/register',
        user,
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const order = async orderData => {
  const res = await axios.post('http://192.168.1.5:3000/v1/orders', orderData);
  return res.data;
};
