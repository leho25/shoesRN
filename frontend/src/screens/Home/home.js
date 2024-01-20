import React, { useEffect } from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from './style';
import {useSelector,useDispatch} from 'react-redux';
import { updateUser } from '../../redux/apiRequests';


const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user);
  useEffect(()=>{
    dispatch(updateUser());
  },[])
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Home</Text>
      </View>
      <ScrollView>
        <View style={style.viewItem}>
          <View style={style.item}>
            <Text>Hình</Text>
            <Text style={style.generalItem}>{username}</Text>
            <Text style={style.generalItem}>Giá</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
