import React, {useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {style} from './style';

const Cart = () => {
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Cart</Text>
      </View>
      <View style={style.containerListCart}>
        <View style={style.insideContainerListCart}>
          <Image
            source={require('../../image-default/profile-default.png')}
            style={style.imageListCart}
          />
          <View style={style.containerInforCart}>
            <View style={style.containerName}>
              <Text style={style.textInforCart}>Name</Text>
            </View>

            <View style={style.containerPrice}>
              <Text style={style.textInforCart}>Price</Text>
            </View>
          </View>
          <View style={style.containerInDe}>
            <View style={style.containerDecrement}>
              <Text style={style.textInforCart}>-</Text>
            </View>
            <View style={style.containerNumberItem}>
              <Text style={style.textInforCart}>1</Text>
            </View>
            <View style={style.containerIncrement}>
              <Text style={style.textInforCart}>+</Text>
            </View>
          </View>
          <View style={style.containerBtnRemove}>
            <View style={style.btnRemove}>
              <Text style={style.textInforCart}>Remove</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.containerOrder}>
        <View style={style.totalPrice}>
          <Text style={style.textOrder}>Total</Text>
        </View>
        <View style={style.btnOrder}>
          <Text style={style.textOrder}>Đặt Hàng</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
