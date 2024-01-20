import {updateStart, updateError, updateSuccess} from './userSlice';
import axios from 'axios';

export const updateUser = async () => {
  const res = await axios.get('/v1/shoes');
  return res.data;
};
