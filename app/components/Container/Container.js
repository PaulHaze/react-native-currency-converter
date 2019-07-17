import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default Container;

Container.propTypes = {
  children: PropTypes.any,
};
