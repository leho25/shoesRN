import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import PostUser from './PostUser';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUser} from '../../redux/apiRequests';
const ManagerUser = () => {
  const [post, setPost] = useState(false);
  const getAll = useSelector(state => state.users.user);
  console.log(getAll);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePost = () => {
    setPost(!post);
  };
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
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
            {getAll.getCurrentUser.map((item, index) => {
              return (
                <View
                  key={index}
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
                    <Text
                      style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                      Name: {item.username}
                    </Text>
                    <Text
                      style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                      Email: {item.email}
                    </Text>
                  </View>
                </View>
              );
            })}
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
