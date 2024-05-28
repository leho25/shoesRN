import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import { useNavigation } from '@react-navigation/native';

const ManagerCart = () => {
const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={style.headerTitle}>
        <TouchableOpacity
          style={style.btnArrowBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back'} size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={style.textTitle}>Manager Cart</Text>
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
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Name:
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Price:
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Quality:
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Total:
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}>
            UserID:
          </Text>
        </View>
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
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Name:
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Price:
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Quality:
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Total:
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}>
            UserID:
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ManagerCart;
