import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

const CardShoes = props => {
  const {name, _id, price, image} = props;
  return (
    <View style={style.cardShoes}>
      <Image source={{uri: image}} style={style.image} />
      <Text style={style.generalItem}>{name}</Text>
      <Text style={style.generalItem}>{price}</Text>
    </View>
  );
};

export default CardShoes;
