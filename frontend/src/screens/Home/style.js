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
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    marginVertical: 10,
    width: '45%',
    borderWidth: 1,
    padding: 10,
  },
  nameItem: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
});
