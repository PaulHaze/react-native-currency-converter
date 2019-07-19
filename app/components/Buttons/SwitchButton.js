import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const SwitchCurrencyButton = ({
  onPress,
  baseCurr,
  quoteCurr,
  exchangeRate,
}) => (
  <TouchableOpacity onPress={onPress} underlayColor="white">
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/btn-swap/icon.png')}
      />
    </View>
    <View style={styles.textView}>
      <Text style={styles.text}>
        1 {baseCurr} = {exchangeRate} {quoteCurr}
      </Text>
    </View>
  </TouchableOpacity>
);

SwitchCurrencyButton.propTypes = {
  onPress: PropTypes.func,
  baseCurr: PropTypes.string.isRequired,
  quoteCurr: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,
};

export default SwitchCurrencyButton;
