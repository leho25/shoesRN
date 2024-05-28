import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {style} from './style';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';

const PostUser = () => {
  const navigation = useNavigation();
  const data = [
    {label: 'true', value: 'true'},
    {label: 'false', value: 'false'},
  ];
  const [value, setValue] = useState(null);
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
            <TextInput style={style.textInput} />
          </View>
        </View>
        <View style={style.containerInsideTextinput}>
          <Text style={style.labelText}>Email</Text>
          <View style={style.viewTextinput}>
            <TextInput style={style.textInput} />
          </View>
        </View>
        <View style={style.containerInsideTextinput}>
          <Text style={style.labelText}>Passwork</Text>
          <View style={style.viewTextinput}>
            <TextInput style={style.textInput} />
          </View>
        </View>
        <View style={style.containerInsideTextinput}>
          <Text style={style.labelText}>Admin</Text>
          <View style={style.viewTextinput}>
            <Dropdown
              style={style.dropdown}
              placeholderStyle={style.placeholderStyle}
              selectedTextStyle={style.selectedTextStyle}
              inputSearchStyle={style.inputSearchStyle}
              iconStyle={style.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
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
        }}>
        <Text style={{fontSize: 26, fontWeight: '700', color: 'black'}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default PostUser;
