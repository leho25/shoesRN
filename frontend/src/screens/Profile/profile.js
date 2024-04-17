import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../redux/apiRequests';
const Profile = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetails.userDetail);
  console.log('userDetail', userDetail);
  const getProfile = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const userId = await AsyncStorage.getItem('userId');
    console.log(accessToken)
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
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 26, color: 'black', fontWeight: 'bold'}}>
          {userDetail.getUser.username}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 6,
            backgroundColor: 'red',
          }}>
          <Text style={{fontSize: 26, fontWeight: '500', color: 'black'}}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
