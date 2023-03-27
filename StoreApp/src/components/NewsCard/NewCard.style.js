import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1.5,
    borderColor: '#65cbed',
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 4,
    margin: 5,
    resizeMode: 'contain',
  },
  inner_container: {
    padding: 7,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    marginTop: 10,
    fontWeight: '500',
  },

  noneStock: {
    marginTop: 5,
    color: 'red',
    alignSelf: 'flex-end',
    marginRight: 5,
  },

  inStock: {
    marginTop: 5,
    color: 'green',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
});
