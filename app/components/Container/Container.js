import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const Container = ({ themeColor, children }) => {
  const viewStyles = [styles.container, { backgroundColor: themeColor }];
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={viewStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

export default Container;

Container.propTypes = {
  themeColor: PropTypes.string,
  children: PropTypes.any,
};
