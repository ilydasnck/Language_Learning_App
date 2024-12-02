import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  child1: {
    backgroundColor: 'orange',
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
  gem: {
    width: 33,
    height: 33,
  },
  kutu: {
    width: 170,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    shadowColor: 'grey',
    zIndex: 1,
    alignItems: 'center',
  },
  icons: {
    width: 40,
    height: 40,
    tintColor: 'orange',
  },
  iconBox: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  dolumDis: {
    width: 150,
    height: 8,
    backgroundColor: 'lightgrey',
    borderRadius: 4,
  },
  dolumIc1: {
    width: 120,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'orange',
  },
  dolumIc2: {
    width: 30,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  dolumIc3: {
    width: 90,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
  dolumIc4: {
    width: 30,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
  },
  dolumIc5: {
    width: 90,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'purple',
  },
  dolumIc6: {
    width: 60,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'darkblue',
  },
});
