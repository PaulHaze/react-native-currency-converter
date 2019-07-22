import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
// import { StyleSheet } from 'react-native';

// add E before exporting
export default EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // left: 320,
    // top: 10,
  },
  icon: {
    width: 22,
  },
});
