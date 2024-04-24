import React, {useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/apiRequests';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleRegister = () => {
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    dispatch(register(newUser))
      .unwrap()
      .then((res) => {
        console.log(res)
        navigation.goBack();
      })
      .catch(er => console.log(er));
  };
  return (
    <View style={style.main}>
      <View style={style.containTitle}>
        <Text style={style.textTitle}>Register</Text>
      </View>
      <View style={style.containerImage}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-shoes-logo-vector-illustration-to-generative-ai-png-image_13153814.png',
          }}
          style={style.imageLogo}
          resizeMode="cover"
        />
      </View>
      <View style={style.containerTextInput}>
        <AntDesign name="user" size={30} style={style.iconRegister} />
        <TextInput
          style={style.textInputRegister}
          placeholder="Enter username"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={style.containerTextInput}>
        <AntDesign name="mail" size={30} style={style.iconRegister} />
        <TextInput
          style={style.textInputRegister}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={style.containerTextInput}>
        <AntDesign name="lock" size={30} style={style.iconRegister} />
        <TextInput
          style={style.textInputRegister}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={style.containerForgotPassword}>
        <Text style={style.textLoggedIn}>Keep me logged in</Text>
        <Text style={style.textForgotPassword}>Forgot Password</Text>
      </View>
      <View style={style.containerRegister}>
        <TouchableOpacity style={style.btnRegister} onPress={handleRegister}>
          <Text style={style.textLogin}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerRegister}>
        <TouchableOpacity
          style={style.btnSignIn}
          onPress={() => navigation.goBack()}>
          <Text style={style.textSignIn}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
