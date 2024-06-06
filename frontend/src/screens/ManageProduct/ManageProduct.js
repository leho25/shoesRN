import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import PostProduct from './PostProduct';
import {useDispatch, useSelector} from 'react-redux';
import {deleteShoes, getAllShoes} from '../../redux/apiRequests';
const ManagerProduct = () => {
  const navigation = useNavigation();
  const getAll = useSelector(state => state.shoes.shoes);
  const [post, setPost] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idProduct, setIdProduct] = useState('');
  const handlePost = () => {
    setPost(!post);
  };
  const handleEdit = id => {
    setIdProduct(id);
    setEdit(!edit);
  };
  const handleDelete = id => {
    dispatch(deleteShoes(id));
  };
  console.log(idProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllShoes());
  }, [getAll]);
  return (
    <View style={{flex: 1}}>
      {post ? (
        <PostProduct setPost={setPost} />
      ) : edit ? (
        <PostProduct id={idProduct} setEdit={setEdit} />
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
            {getAll.map((item, index) => {
              return (
                <View
                  key={item._id}
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
                      source={{uri: item.image}}
                      style={{width: 70, height: 70, borderRadius: 70 / 2}}
                    />
                    <View style={{flex: 1, marginLeft: 20}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Name: {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Price: {item.price}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        publishedDate: {item.publishedDate}
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
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}
                        onPress={() => handleEdit(item)}>
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
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: 'black',
                        }}
                        onPress={() => handleDelete(item._id)}>
                        Delete
                      </Text>
                    </TouchableOpacity>
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
export default ManagerProduct;
