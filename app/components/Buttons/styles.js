import EStyleSheet from 'react-native-extended-stylesheet';
// import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    marginBottom: 35,
  },
  image: {
    position: 'absolute',
    right: 118,
  },
  textView: {
    position: 'absolute',
    right: -160,
    top: 10,
  },
  text: {
    fontSize: 14,
    color: '$white',
  },
});

export default styles;
