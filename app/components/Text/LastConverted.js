import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ date, base, quote, exchangeRate }) => (
  <View style={styles.exchView}>
    <Text style={styles.exchText}>
      1 {base} = {exchangeRate} {quote} as of{' '}
      {moment(date).format('MMMM DD YYYY')}
    </Text>
  </View>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  exchangeRate: PropTypes.number,
};

export default LastConverted;
