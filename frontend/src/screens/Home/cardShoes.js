import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const CardShoes = props => {
  const {name, _id, price, image} = props;
  const navigation = useNavigation();
  return (
    <View style={style.cardShoes}>
      <Image source={{uri: image}} style={style.image} resizeMode="cover" />
      <View style={style.cardInfor} key={_id}>
        <Text style={style.generalItem}>Name: {name}</Text>
        <Text style={style.generalItem}>Price: {price}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.btnCart}
        onPress={() => {
          navigation.navigate('HomeDetail', {id: _id});
        }}>
        <Text style={style.btnTitleCart}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardShoes;
