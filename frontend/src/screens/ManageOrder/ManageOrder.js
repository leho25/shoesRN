import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllOrder} from '../../redux/apiRequests';
const ManagerOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getAll = useSelector(state => state.orderAll.getAllOrder);
  console.log(getAll);
  useEffect(() => {
    dispatch(getAllOrder());
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={style.headerTitle}>
        <TouchableOpacity
          style={style.btnArrowBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'arrow-back'} size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={style.textTitle}>Manager Order</Text>
      </View>
      <View style={{flex: 1, margin: 10}}>
        {getAll.getAll.map(item => {
          return (
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}>
              {item.product.map(items => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={{uri: items.productId.image}}
                      style={{width: 70, height: 70, borderRadius: 70 / 2}}
                    />
                    <View style={{flex: 1, marginLeft: 20}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Name: {items.productId.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Price: {items.productId.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Quality: {items.quality}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Total: {item.totalPrice}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 16,
                  fontWeight: '500',
                  color: 'black',
                }}>
                UserID: {item.user}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default ManagerOrder;
