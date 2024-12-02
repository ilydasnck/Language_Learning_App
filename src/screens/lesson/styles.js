import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  child1: {
    backgroundColor: '#02A2DC',
    flex: 5,
    height: 200,
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
    zIndex: 0,
  },
  child2: {
    flex: 7,
    justifyContent: 'space-around',
    zIndex: 1,
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  bar: {
    flexDirection: 'row',
    width: windowWidth,
    height: 60,
    alignItems: 'center',
  },
  back: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  nokta: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  text: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  kutu: {
    width: 350,
    height: 300,
    elevation: 15,
    shadowColor: 'grey',
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: -150,
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 30,
  },
  messages: {
    width: 30,
    height: 30,
    tintColor: '#02A2DC',
  },
  text2: {
    fontSize: 35,
    fontWeight: 300,
  },
  tirnak: {
    justifyContent: 'flex-end', // Dikeyde alt kısma hizalar
    alignItems: 'flex-end', // Yatayda sağa hizalar
  },
  noktaMavi: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#02A2DC',
  },
  noktaGri: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  input: {
    width: 350,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    fontSize: 16, // Yazı boyutu
    marginBottom: 20,
  },
  check: {
    width: 50,
    height: 50,
    tintColor: '#02A2DC',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
    shadowColor: 'grey',
  },
});
