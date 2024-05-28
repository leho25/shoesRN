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
  dropdown: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  containerTextinput: {flex: 1, backgroundColor: '#ffc6a4', margin: 10},
  containerInsideTextinput: {width: '100%', height: 90},
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20,
    marginVertical: 5,
  },
  textInput: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  viewTextinput: {alignItems: 'center'},
});
