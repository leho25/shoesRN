import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from './style';

const Home = () => {
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Home</Text>
      </View>
      <ScrollView>
        <View style={style.viewItem}>
          <View style={style.item}>
            <Text>Hình</Text>
            <Text style={style.generalItem}>Tên sản phẩm</Text>
            <Text style={style.generalItem}>Giá</Text>
          </View>
          <View style={style.item}>
            <Text>Hình</Text>
            <Text>Tên sản phẩm</Text>
            <Text>Giá</Text>
          </View>
          <View style={style.item}>
            <Text>Hình</Text>
            <Text>Tên sản phẩm</Text>
            <Text>Giá</Text>
          </View>
          <View style={style.item}>
            <Text>Hình</Text>
            <Text>Tên sản phẩm</Text>
            <Text>Giá</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
