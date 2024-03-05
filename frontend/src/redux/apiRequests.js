import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllShoes = createAsyncThunk('getAllShoes', async () => {
  const res = await axios.get('http://192.168.1.157:3000/v1/shoes');
  return res.data;
});
export const aPairOfShoes = createAsyncThunk('aPairOfShoes', async shoesId => {
  const res = await axios.get(`http://192.168.1.157:3000/v1/shoes/${shoesId}`);
  return res.data;
});
