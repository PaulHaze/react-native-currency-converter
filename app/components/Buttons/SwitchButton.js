import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const SwitchCurrencyButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} underlayColor="white">
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/btn-swap/icon.png')}
      />
    </View>
  </TouchableOpacity>
);

SwitchCurrencyButton.propTypes = {
  onPress: PropTypes.func,
};

export default SwitchCurrencyButton;
