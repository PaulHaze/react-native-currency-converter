/* eslint-disable no-console */

// REACT IMPORTS
import React, { Component } from 'react';
import { FlatList, View, StatusBar, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

// REDUX IMPORTS
import { connect } from 'react-redux';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

// COMPONENT IMPORTS
import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

class CurrencyList extends Component {
  handlePress = currency => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency));
    }
    navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <SafeAreaView>
          <FlatList
            data={currencies}
            renderItem={({ item }) => (
              <ListItem
                text={item}
                selected={item === 'USD'}
                onPress={() => this.handlePress(item)}
              />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
          />
        </SafeAreaView>
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(CurrencyList);
