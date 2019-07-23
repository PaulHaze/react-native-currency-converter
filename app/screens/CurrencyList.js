import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'AUD';

class CurrencyList extends Component {
  handlePress = () => {
    console.log('row pressed');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

// const CurrencyList = () => (
//   <View style={{ flex: 1 }}>
//     <StatusBar barStyle="default" translucent={false} />
//     <FlatList
//       data={currencies}
//       renderItem={({ item }) => <Text>{item}</Text>}
//       keyExtractor={item => item}
//     />
//   </View>
// );

export default CurrencyList;
