import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUser} from '../../redux/apiRequests';

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;
