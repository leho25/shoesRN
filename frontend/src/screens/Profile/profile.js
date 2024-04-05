import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';
const Profile = () => {
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
          Name
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
