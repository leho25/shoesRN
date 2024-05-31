import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {style} from './style';
import {
  clearCart,
  decrementQuality,
  incrementQuality,
  removeFromCart,
} from '../../redux/cartSlice';
import {getUser, order} from '../../redux/apiRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const cart = useSelector(state => state.carts.cart);
  console.log('cart', cart);
  const userDetail = useSelector(state => state.userDetails.userDetail);
  const userId = userDetail.getUser._id;
  const getProfile = async () => {
    const userId = await AsyncStorage.getItem('userId');
    dispatch(getUser(userId));
  };
  useEffect(() => {
    if (userId) {
      getProfile();
    } else {
      console.log('Not login');
    }
  }, []);
  const total = cart
    .filter(item => item.userId === userId)
    .map(item => item.item.price * item.quality)
    .reduce((pre, current) => pre + current, 0);
  const dispatch = useDispatch();
  const decrementQualityCart = item => {
    console.log('Dispatching:', item);
    dispatch(decrementQuality(item));
  };
  const incrementQualityCart = item => {
    console.log('Dispatching:', item);
    dispatch(incrementQuality(item));
  };
  const removedItemCart = id => {
    console.log('Dispatching remove item with id:', id);
    dispatch(removeFromCart(id));
  };
  const handlePlaceOrder = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const orderData = {
        userId: userId,
        cartsItem: cart,
        totalPrice: total,
      };
      await dispatch(order(orderData));
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Cart</Text>
      </View>
      <View style={style.containerListCart}>
        {cart.map((item, index) => {
          return (
            <View key={item.id}>
              {item.userId === userId ? (
                <View style={style.insideContainerListCart}>
                  {item.item.image ? (
                    <Image
                      source={{uri: item.item.image}}
                      style={style.imageListCart}
                    />
                  ) : null}
                  <View style={style.containerInforCart}>
                    <View style={style.containerName}>
                      <Text style={style.textInforCart}>{item.item.name}</Text>
                    </View>
                    <View style={style.containerPrice}>
                      <Text style={style.textInforCart}>{item.item.price}</Text>
                    </View>
                  </View>
                  <View style={style.containerInDe}>
                    <TouchableOpacity
                      style={style.containerDecrement}
                      onPress={() => {
                        decrementQualityCart(item);
                      }}>
                      <Text style={style.textInforCart}>-</Text>
                    </TouchableOpacity>
                    <View style={style.containerNumberItem}>
                      <Text style={style.textInforCart}>{item.quality}</Text>
                    </View>
                    <TouchableOpacity
                      style={style.containerIncrement}
                      onPress={() => incrementQualityCart(item)}>
                      <Text style={style.textInforCart}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={style.containerBtnRemove}>
                    <TouchableOpacity
                      style={style.btnRemove}
                      onPress={() => removedItemCart(item.id)}>
                      <Text style={style.textInforCart}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
            </View>
          );
        })}
      </View>
      <View style={style.containerOrder}>
        <View style={style.totalPrice}>
          <Text style={style.textOrder}>Total: {total} VNĐ</Text>
        </View>
        <TouchableOpacity style={style.btnOrder} onPress={handlePlaceOrder}>
          <Text style={style.textOrder}>Đặt Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
