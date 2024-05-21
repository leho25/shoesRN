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
import {cartUser, getUser, order} from '../../redux/apiRequests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const cart = useSelector(state => state.carts.cart);
  const listCartUser = useSelector(state => state.cartUsers.cartUser);
  const userDetail = useSelector(state => state.userDetails.userDetail);
  const userId = userDetail.getUser._id;
  useEffect(() => {
    dispatch(cartUser(userId));
  }, []);
  const dispatch = useDispatch();
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
        {listCartUser?.product.map((item, index) => {
          return (
            <View style={style.insideContainerListCart} key={index}>
              <Image
                source={{uri: item.productId.image}}
                style={style.imageListCart}
              />
              <View style={style.containerInforCart}>
                <View style={style.containerName}>
                  <Text style={style.textInforCart}>{item.productId.name}</Text>
                </View>
                <View style={style.containerPrice}>
                  <Text style={style.textInforCart}>
                    {item.productId.price}
                  </Text>
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
                  onPress={() => removedItemCart(item)}>
                  <Text style={style.textInforCart}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View style={style.containerOrder}>
        <View style={style.totalPrice}>
          <Text style={style.textOrder}>Total: VNĐ</Text>
        </View>
        <TouchableOpacity style={style.btnOrder} onPress={handlePlaceOrder}>
          <Text style={style.textOrder}>Đặt Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
