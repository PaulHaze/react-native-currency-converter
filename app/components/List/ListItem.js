import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const ListItem = ({ text, onPress, selected }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.row}>
      <Text>{text}</Text>
      {selected && <Text>Selected</Text>}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  selected: PropTypes.bool,
};

export default ListItem;
