import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const SwitchCurrencyButton = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} underlayColor="white">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../assets/btn-swap/icon.png')}
        />
      </View>
    </TouchableOpacity>
  </View>
);

SwitchCurrencyButton.propTypes = {
  onPress: PropTypes.func,
};

export default SwitchCurrencyButton;
