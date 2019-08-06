/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleThemeChange = color => {
    console.log(`${color} theme pressed`);
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <SafeAreaView>
          <ListItem
            text="Blue"
            onPress={() => this.handleThemeChange(styles.$blue)}
            selected
            checkmark={false}
            iconBackground={styles.$blue}
          />
          <Separator />
          <ListItem
            text="Orange"
            onPress={() => this.handleThemeChange(styles.$orange)}
            selected
            checkmark={false}
            iconBackground={styles.$orange}
          />
          <Separator />
          <ListItem
            text="Green"
            onPress={() => this.handleThemeChange(styles.$green)}
            selected
            checkmark={false}
            iconBackground={styles.$green}
          />
          <Separator />
          <ListItem
            text="Purple"
            onPress={() => this.handleThemeChange(styles.$purple)}
            selected
            checkmark={false}
            iconBackground={styles.$purple}
          />
          <Separator />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Themes;
