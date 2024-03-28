import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  containTitle: {
    marginVertical: 10,
  },
  main: {
    flex: 1,
  },
  textTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  containerImage: {alignItems: 'center', marginVertical: 10},
  imageLogo: {
    width: 200,
    height: 200,
  },
  textInputLogin: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 30,
    width: '90%',
    paddingLeft: 50,
    fontSize: 20,
  },
  containerTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  iconLogin: {
    position: 'absolute',
    left: 50,
  },
  containerForgotPassword: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textLoggedIn: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  textForgotPassword: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '500',
  },
  btnLogin: {
    borderWidth: 1,
    width: 150,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: 'orange',
    borderRadius: 20,
  },
  containerLogin: {
    alignItems: 'center',
  },
  textLogin: {fontSize: 30, fontWeight: 'bold', color: 'black'},
  containerSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnSignUp: {marginLeft: 5},
  textSignUp: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
