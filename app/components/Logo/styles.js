import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  logo: {
    width: imageWidth / 2,
    height: imageWidth / 2,
  },
  text: {
    marginTop: 20,
    letterSpacing: -0.5,
    color: '$white',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default styles;
