import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {aPairOfShoes} from '../../redux/apiRequests';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';

const HomeDetail = ({route, navigation}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const data = useSelector(state => state.aPairOfShoes);
  useEffect(() => {
    dispatch(aPairOfShoes(id));
  }, []);
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
                <TouchableOpacity style={style.btnDecrease}>
                  <Text style={style.textDecrease}>-</Text>
                </TouchableOpacity>
                <View style={style.numberItem}>
                  <Text style={style.textNumber}>1</Text>
                </View>
                <TouchableOpacity
                  style={style.btnIncrease}
                  onPress={() => {
                    console.log('+++++++++');
                  }}>
                  <Text style={style.textIncrease}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={style.btnAddCart}
            onPress={() => {
              console.log('Add Cart');
            }}>
            <Text style={style.btnTextAddCart}>Thêm Vào Giỏ Hàng</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeDetail;
