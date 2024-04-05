import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from './style';
import {useSelector, useDispatch} from 'react-redux';
import {getAllShoes} from '../../redux/apiRequests';
import CardShoes from './cardShoes';
const Home = () => {
  const dispatch = useDispatch();
  const shoes = useSelector(state => state.shoes);
  console.log(shoes)
  useEffect(() => {
    dispatch(getAllShoes());
  }, []);
  return (
    <View style={style.main}>
      <View style={style.bgTitle}>
        <Text style={style.textTitle}>Home</Text>
      </View>
      <ScrollView>
        {shoes.pending ? (
          <Text>Loading...</Text>
        ) : (
          <View style={style.viewItem}>
            {shoes.shoes.map(item => {
              return (
                <View style={style.item} key={item._id}>
                  <CardShoes
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    _id={item._id}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Home;
