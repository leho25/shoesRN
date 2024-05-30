import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {aPairOfShoes, getUser} from '../../redux/apiRequests';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import {addToCart} from '../../redux/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeDetail = ({route, navigation}) => {
  const [quality, setQuality] = useState(1);
  const incerment = () => {
    setQuality(quality + 1);
  };
  const decerment = () => {
    setQuality(quality - 1);
  };
  const {id, item} = route.params;
  const dispatch = useDispatch();
  const data = useSelector(state => state.aPairOfShoes);
  const userDetail = useSelector(state => state.userDetails.userDetail);
  console.log(userDetail.getUser._id);
  const userId = userDetail.getUser._id;
  const cart = useSelector(state => state.carts.cart);
  console.log('cart', cart);
  const getProfile = async () => {
    const userId = await AsyncStorage.getItem('userId');
    dispatch(getUser(userId));
  };
  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    dispatch(aPairOfShoes(id));
  }, []);
  const addItemToCart = () => {
    if (userId) {
      const newItem = {
        id:id,
        item: item,
        quality: quality,
        userId: userId,
      };
      dispatch(addToCart(newItem));
    } else {
      <Alert>Bạn Phải Đăng Nhập</Alert>;
    }
  };
  return (
    <View style={style.main}>
      <View style={style.headerTitle}>
        <TouchableOpacity
          style={style.btnArrowBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back'} size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={style.textTitle}>Product Detail</Text>
      </View>
      {data.pending ? (
        <Text>Loading...</Text>
      ) : (
        <View style={style.containProduct}>
          <Image
            source={{uri: data.aPairOfShoes.image}}
            style={style.productImage}
          />
          <View style={style.containInfor}>
            <Text style={style.productName}>
              Name: {data.aPairOfShoes.name}
            </Text>
            <View style={style.containPriceNumberItem}>
              <Text style={style.productPrice}>
                Price: {data.aPairOfShoes.price} VNĐ
              </Text>
              <View style={style.containBtnDecInc}>
                <TouchableOpacity style={style.btnDecrease} onPress={decerment}>
                  <Text style={style.textDecrease}>-</Text>
                </TouchableOpacity>
                <View style={style.numberItem}>
                  <Text style={style.textNumber}>{quality}</Text>
                </View>
                <TouchableOpacity style={style.btnIncrease} onPress={incerment}>
                  <Text style={style.textIncrease}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity style={style.btnAddCart} onPress={addItemToCart}>
            <Text style={style.btnTextAddCart}>Thêm Vào Giỏ Hàng</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeDetail;
