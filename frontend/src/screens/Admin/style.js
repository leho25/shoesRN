import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  textTitle: {
    fontSize: 32,
    color: 'black',
    fontWeight: '500',
  },
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
  adminContainerImage: {alignItems: 'center', marginTop: 20, marginBottom: 20},
  adminImage: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  adminContainerInfor: {marginTop: 10},
  textInforName: {fontSize: 26, color: 'black', fontWeight: '500'},
  containerButtonAdmin: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnAdmin: {
    width: '40%',
    height: 50,
    backgroundColor: 'green',
    borderWidth: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textBtnAdmin: {fontSize: 16, color: 'white', fontWeight: '500'},
  btnLogout: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  containerBtnLogout: {marginTop: 90, alignItems: 'center'},
  textLogout: {fontSize: 16, fontWeight: '500', color: 'white'},
});
