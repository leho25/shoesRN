import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/apiRequests';

const Login = ({navigation}) => {
  // const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const msg = useSelector(state => state.auth.msg);
  const dispatch = useDispatch();
  const handleLogin = () => {
    const newUser = {
      username: username,
      password: password,
    };
    dispatch(login(newUser))
      .unwrap()
      .then(() => navigation.navigate('Main'))
      .catch(er => er);
  };
  return (
    <View style={style.main}>
      <View style={style.containTitle}>
        <Text style={style.textTitle}>Login</Text>
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
        <AntDesign name="user" size={30} style={style.iconLogin} />
        <TextInput
          style={style.textInputLogin}
          onChangeText={text => setUsername(text)}
          placeholder="Enter Username"
          value={username}
        />
      </View>
      <View style={style.containerTextInput}>
        <AntDesign name="lock" size={30} style={style.iconLogin} />
        <TextInput
          style={style.textInputLogin}
          onChangeText={text => setPassword(text)}
          placeholder="Enter Password"
          value={password}
        />
      </View>
      <View style={style.containerForgotPassword}>
        <Text style={style.textLoggedIn}>Keep me logged in</Text>
        <Text style={style.textForgotPassword}>Forgot Password</Text>
      </View>
      <View style={style.containerLogin}>
        <TouchableOpacity style={style.btnLogin} onPress={handleLogin}>
          <Text style={style.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerSignUp}>
        <Text style={style.textAccount}>Don't have an account?</Text>
        <TouchableOpacity
          style={style.btnSignUp}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={style.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text>{msg}</Text>
    </View>
  );
};

export default Login;
