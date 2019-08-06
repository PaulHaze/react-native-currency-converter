/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, SafeAreaView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemesPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes');
  };

  handleSitePress = () => {
    const { alertWithType } = this.props;
    Linking.openURL('http://fixer.io').catch(() =>
      alertWithType('error', 'Sorry!', 'Fixer.io cant be reached right now'),
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <SafeAreaView>
          <ListItem
            text="Themes"
            onPress={this.handleThemesPress}
            customIcon={
              <Ionicons
                name="ios-arrow-forward"
                size={ICON_SIZE}
                color={ICON_COLOR}
              />
            }
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={this.handleSitePress}
            customIcon={
              <Ionicons name="ios-link" size={ICON_SIZE} color={ICON_COLOR} />
            }
          />
          <Separator />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
