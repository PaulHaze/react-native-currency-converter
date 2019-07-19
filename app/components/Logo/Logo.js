import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import styles from './styles';

const Logo = () => (
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

export default Logo;
