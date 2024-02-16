import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

const CardShoes = props => {
  const {name, _id, price, image} = props;
  return (
    <View style={style.cardShoes}>
      <Image source={{uri: image}} style={style.image} resizeMode="cover" />
      <View style={style.cardInfor}>
        <Text style={style.generalItem}>Name: {name}</Text>
        <Text style={style.generalItem}>Price: {price}</Text>
      </View>
      <TouchableOpacity style={style.btnCart} onPress={()=>{
        console.log("Test")
      }}>
        <Text style={style.btnTitleCart}>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardShoes;
