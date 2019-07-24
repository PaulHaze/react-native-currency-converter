/* eslint-disable no-console */
import React, { Component } from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';

import { ListItem, Separator } from '../components/List';

class Themes extends Component {
  handleThemeChange = color => {
    console.log(`${color} theme pressed`);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="default" translucent={false} />
        <SafeAreaView>
          <ListItem
            text="Blue"
            onPress={() => this.handleThemeChange('blue')}
          />
          <Separator />
          <ListItem text="Red" onPress={() => this.handleThemeChange('red')} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default Themes;
