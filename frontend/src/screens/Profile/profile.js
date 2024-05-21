import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../redux/apiRequests';
const Profile = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetails.userDetail);
  const getProfile = async () => {
    const userId = await AsyncStorage.getItem('userId');
    dispatch(getUser(userId));
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Profile</Text>
      </View>
      <View style={style.containerImageAvatar}>
        <View>
          <Image
            source={require('../../image-default/l60Hf.png')}
            style={style.imageAvatar}
          />
        </View>
      </View>
      <View style={style.userInfor}>
        <Text style={style.textInfor}>{userDetail.getUser?.username}</Text>
      </View>
      <View style={style.containerBtnLogout}>
        <TouchableOpacity style={style.btnLogout}>
          <Text style={style.textBtnLogout}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
