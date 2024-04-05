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
  textTitle: {fontSize: 32, fontWeight: '500',color:'black'},
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
});
