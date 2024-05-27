import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  headerTitle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 4,
  },
  btnArrowBack: {
    position: 'absolute',
    left: 10,
  },
  textTitle: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
