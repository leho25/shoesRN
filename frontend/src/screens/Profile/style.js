import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  main: {flex: 1},
  bgTitle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 4,
  },
  textTitle: {fontSize: 32, fontWeight: '500', color: 'black'},
  containerImageAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageAvatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
  },
  userInfor: {flex: 1, alignItems: 'center'},
  textInfor: {fontSize: 26, color: 'black', fontWeight: 'bold'},
  btnLogout: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  textBtnLogout: {fontSize: 26, fontWeight: '500', color: 'black'},
  containerBtnLogout: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
});
