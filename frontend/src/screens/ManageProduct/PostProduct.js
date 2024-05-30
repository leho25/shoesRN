import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addShoes} from '../../redux/apiRequests';

const PostProduct = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = [
    {label: 'thể thao', value: 'thể thao'},
    {label: 'chạy bộ', value: 'chạy bộ'},
  ];
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [inStock, setInStock] = useState(0);
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
  };
  return (
    <View style={{flex: 1}}>
      <View style={style.headerTitle}>
        <TouchableOpacity
          style={style.btnArrowBack}
          onPress={() => navigation.goBack()}>
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
    </View>
  );
};
export default PostProduct;
