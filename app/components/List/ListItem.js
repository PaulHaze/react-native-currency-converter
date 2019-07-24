import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

const ListItem = ({
  text,
  onPress,
  iconBackground,
  customIcon = null,
  selected = false,
  checkmark = true,
  visible = true,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text>{text}</Text>
      {selected ? (
        <Icon
          checkmark={checkmark}
          visible={visible}
          iconBackground={iconBackground}
        />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
