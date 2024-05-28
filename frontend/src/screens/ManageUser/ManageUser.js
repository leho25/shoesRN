import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import PostUser from './PostUser';
const ManagerUser = () => {
  const [post, setPost] = useState(false);
  const navigation = useNavigation();
  const handlePost = () => {
    setPost(!post);
  };
  return (
    <View style={{flex: 1}}>
      {post ? (
        <PostUser />
      ) : (
        <>
          <View style={style.headerTitle}>
            <TouchableOpacity
              style={style.btnArrowBack}
              onPress={() => navigation.goBack()}>
              <Ionicons name={'arrow-back'} size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={style.textTitle}>Manager User</Text>
          </View>
          <View style={{flex: 1, margin: 10, gap: 10}}>
            <View
              style={{
                backgroundColor: '#24bfdd',
                padding: 10,
                flexDirection: 'row',
                paddingHorizontal: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Image
                source={require('../../image-default/l60Hf.png')}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
              />
              <View
                style={{
                  marginHorizontal: 30,
                  flex: 1,
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                  Name: Lenam
                </Text>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                  Email: Email
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#24bfdd',
                padding: 10,
                flexDirection: 'row',
                paddingHorizontal: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
              }}>
              <Image
                source={require('../../image-default/l60Hf.png')}
                style={{width: 70, height: 70, borderRadius: 70 / 2}}
              />
              <View
                style={{
                  marginHorizontal: 30,
                  flex: 1,
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                  Name: Lenam
                </Text>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                  Email: Email
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff9689',
              height: 50,
              margin: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handlePost}>
            <Text style={{fontSize: 26, fontWeight: '700', color: 'black'}}>
              +
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
export default ManagerUser;
