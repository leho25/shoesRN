import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {style} from './style';
import {decrementQuality, incrementQuality, removeFromCart} from '../../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const total = cart
    ?.map(item => item.price * item.quality)
    .reduce((current, prev) => {
      return current + prev;
    }, 0);
  const incrementQualityCart = item => {
    dispatch(incrementQuality(item));
  };
  const decrementQualityCart = item => {
    dispatch(decrementQuality(item));
  };
  const removedItemCart = item => {
    dispatch(removeFromCart(item));
  };
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Cart</Text>
      </View>
      <View style={style.containerListCart}>
        {cart.map((item, index) => {
          return (
            <View style={style.insideContainerListCart} key={index}>
              <Image source={{uri: item.image}} style={style.imageListCart} />
              <View style={style.containerInforCart}>
                <View style={style.containerName}>
                  <Text style={style.textInforCart}>{item.name}</Text>
                </View>
                <View style={style.containerPrice}>
                  <Text style={style.textInforCart}>{item.price}</Text>
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
                <TouchableOpacity style={style.btnRemove} onPress={()=>removedItemCart(item)}>
                  <Text style={style.textInforCart}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View style={style.containerOrder}>
        <View style={style.totalPrice}>
          <Text style={style.textOrder}>Total: {total} VNĐ</Text>
        </View>
        <View style={style.btnOrder}>
          <Text style={style.textOrder}>Đặt Hàng</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
