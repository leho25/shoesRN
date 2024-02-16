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
  generalItem: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  image: {
    width: 150,
    height: 150,
  },
  cardShoes: {
    alignItems: 'center',
  },
  cardInfor: {
    width: '100%',
    paddingHorizontal: 7,
  },
  btnCart:{
    width:'90%',
    backgroundColor:'red',
    alignItems:'center',
    height:40,
    justifyContent:'center',
    borderRadius:10,
    marginTop:5
  },
  btnTitleCart:{
    fontSize:16,
    color:"white",
    fontWeight:'600'
  }
});
