import {StyleSheet} from 'react-native';

export default style = StyleSheet.create({
  main: {
    flex: 1,
  },
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
  productImage: {
    width: '100%',
    height: '50%',
    // resizeMode: 'contain',
  },
  containProduct: {
    flex: 1,
    paddingVertical: 20,
  },
  containInfor: {
    padding: 10,
  },
  productName: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  btnAddCart: {
    backgroundColor: 'red',
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextAddCart: {fontSize: 26, color: 'white', fontWeight: '500'},
  containBtnDecInc: {flexDirection: 'row', gap: 10},
  btnDecrease: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  btnIncrease: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  textDecrease: {fontSize: 28, fontWeight: '500', color: 'black'},
  textNumber: {fontSize: 20, fontWeight: '500', color: 'black'},
  textIncrease: {fontSize: 28, fontWeight: '500', color: 'black'},
  numberItem: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containPriceNumberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
