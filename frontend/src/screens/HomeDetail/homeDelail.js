import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {aPairOfShoes} from '../../redux/apiRequests';

const HomeDetail = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const data = useSelector(state => state.aPairOfShoes);
  useEffect(() => {
    dispatch(aPairOfShoes(id));
  }, []);
  return (
    <View>
      {data.pending ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text>{data.aPairOfShoes.name}</Text>
          <Text>{data.aPairOfShoes.price}</Text>
        </View>
      )}
    </View>
  );
};

export default HomeDetail;
