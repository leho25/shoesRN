import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addShoes, updateShoes} from '../../redux/apiRequests';

const PostProduct = props => {
  const {id, setPost, setEdit} = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = [
    {label: 'thể thao', value: 'thể thao'},
    {label: 'chạy bộ', value: 'chạy bộ'},
  ];
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState(id ? id.name : '');
  const [price, setPrice] = useState(id ? id.price : '');
  const [image, setImage] = useState(id ? id.image : '');
  const [publishedDate, setPublishedDate] = useState(
    id ? id.publishedDate : '',
  );
  const [inStock, setInStock] = useState(id ? id.stock : '');
  const clearTextinput = () => {
    setName('');
    setSelected([]);
    setPrice(0);
    setImage('');
    setPublishedDate('');
    setInStock(0);
    setPost ? setPost(false) : setEdit(false);
  };
  const handlePost = () => {
    const newShoes = {
      name: name,
      price: price,
      image: image,
      publishedDate: publishedDate,
      category: selected,
      stock: inStock,
    };
    dispatch(addShoes(newShoes));
    clearTextinput();
    setPost(false);
  };
  const handleEdit = async id => {
    console.log('id', id);
    const newShoes = {
      id: id,
      name: name,
      price: price,
      image: image,
      publishedDate: publishedDate,
      category: selected,
      stock: inStock,
    };
    console.log('newShoes', newShoes);
    dispatch(updateShoes(id, newShoes));
    clearTextinput();
  };
  return (
    <View style={{flex: 1}}>
      {id ? (
        <>
          <View style={style.headerTitle}>
            <TouchableOpacity
              style={style.btnArrowBack}
              onPress={() => clearTextinput()}>
              <Ionicons name={'arrow-back'} size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={style.textTitle}>Update Product</Text>
          </View>
          <View style={style.containerTextinput}>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Name</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setName(text)}
                  value={name}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Price</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setPrice(text)}
                  value={price.toString()}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>In stock</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setInStock(text)}
                  value={inStock ? inStock.toString() : null}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Image</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setImage(text)}
                  value={image}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>publishedDate</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setPublishedDate(text)}
                  value={publishedDate}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Category</Text>
              <View style={style.viewTextinput}>
                <MultiSelect
                  style={style.dropdown}
                  placeholderStyle={style.placeholderStyle}
                  selectedTextStyle={style.selectedTextStyle}
                  inputSearchStyle={style.inputSearchStyle}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={selected}
                  onChange={item => {
                    setSelected(item);
                  }}
                  selectedStyle={style.selectedStyle}
                />
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
            onPress={() => handleEdit(id._id)}>
            <Text style={{fontSize: 26, fontWeight: '700', color: 'black'}}>
              Update
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={style.headerTitle}>
            <TouchableOpacity
              style={style.btnArrowBack}
              onPress={() => clearTextinput()}>
              <Ionicons name={'arrow-back'} size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={style.textTitle}>Post User</Text>
          </View>
          <View style={style.containerTextinput}>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Name</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setName(text)}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Price</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setPrice(text)}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>In stock</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setInStock(text)}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Image</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setImage(text)}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>publishedDate</Text>
              <View style={style.viewTextinput}>
                <TextInput
                  style={style.textInput}
                  onChangeText={text => setPublishedDate(text)}
                />
              </View>
            </View>
            <View style={style.containerInsideTextinput}>
              <Text style={style.labelText}>Category</Text>
              <View style={style.viewTextinput}>
                <MultiSelect
                  style={style.dropdown}
                  placeholderStyle={style.placeholderStyle}
                  selectedTextStyle={style.selectedTextStyle}
                  inputSearchStyle={style.inputSearchStyle}
                  data={data}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={selected}
                  onChange={item => {
                    setSelected(item);
                  }}
                  selectedStyle={style.selectedStyle}
                />
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
              Save
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
export default PostProduct;
