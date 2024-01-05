import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  main: {
    flex: 1,
  },
  bgTitle: {
    backgroundColor: 'pink',
  },
  textTitle: {
    fontSize: 32,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  viewItem: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around'
  },
  item: {
    backgroundColor: 'red',
    marginVertical: 10,
    width: '45%',
    borderWidth: 1,
  },
  nameItem: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 8,
  },
});
