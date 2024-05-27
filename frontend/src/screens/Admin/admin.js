import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from '../Admin/style';
import {useNavigation} from '@react-navigation/native';

const Admin = () => {
  const navigation = useNavigation();
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Admin</Text>
      </View>
      <View style={style.adminContainerImage}>
        <View>
          <Image
            source={require('../../image-default/l60Hf.png')}
            style={style.adminImage}
          />
        </View>
        <View style={style.adminContainerInfor}>
          <Text style={style.textInforName}>Le Nam</Text>
        </View>
      </View>
      <View style={style.containerButtonAdmin}>
        <TouchableOpacity
          style={style.btnAdmin}
          onPress={() => navigation.navigate('ManageUser')}>
          <Text style={style.textBtnAdmin}>Manager User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnAdmin}
          onPress={() => navigation.navigate('ManageProduct')}>
          <Text style={style.textBtnAdmin}>Manager Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnAdmin}
          onPress={() => navigation.navigate('ManageOrder')}>
          <Text style={style.textBtnAdmin}>Manager Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnAdmin}
          onPress={() => navigation.navigate('ManageCart')}>
          <Text style={style.textBtnAdmin}>Manager Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerBtnLogout}>
        <TouchableOpacity style={style.btnLogout}>
          <Text style={style.textLogout}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Admin;
