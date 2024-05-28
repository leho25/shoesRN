import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import PostProduct from './PostProduct';
const ManagerProduct = () => {
  const navigation = useNavigation();
  const [post, setPost] = useState(false);
  const handlePost = () => {
    setPost(!post);
  };
  return (
    <View style={{flex: 1}}>
      {post ? (
        <PostProduct />
      ) : (
        <>
         <View style={style.headerTitle}>
            <TouchableOpacity
              style={style.btnArrowBack}
              onPress={() => navigation.goBack()}>
              <Ionicons name={'arrow-back'} size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={style.textTitle}>Manager Product</Text>
          </View>
          <View style={{flex: 1, margin: 10}}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../image-default/l60Hf.png')}
                  style={{width: 70, height: 70, borderRadius: 70 / 2}}
                />
                <View style={{flex: 1, marginLeft: 20}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    Name:
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    Price:
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    In stock:
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',
                    width: '40%',
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    width: '40%',
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                    Delete
                  </Text>
                </TouchableOpacity>
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
export default ManagerProduct;
