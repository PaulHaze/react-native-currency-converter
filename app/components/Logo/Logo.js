import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Keyboard,
  Animated,
} from 'react-native';
import styles from './styles';

class Logo extends Component {
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardShow,
    );
    this.keyboardHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardHide,
    );
  }
  componentWillUnmount() {}

  keyboardShow = () => {
    console.log('keyboard has shown');
  };

  keyboardHide = () => {
    console.log('keyboard has hidden');
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.containerImage}
          resizeMode="contain"
          source={require('../../assets/logo/background.png')}
        >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../../assets/logo/logo.png')}
          />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
