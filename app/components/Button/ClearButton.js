import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const SwapCurrencyBtn = () => (
  <View style={styles.container}>
    <TouchableOpacity underlayColor="white">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../assets/btn-swap/icon.png')}
        />
      </View>
    </TouchableOpacity>
  </View>
);

export default SwapCurrencyBtn;
