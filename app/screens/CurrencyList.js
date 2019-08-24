/* eslint-disable react/no-unused-prop-types */
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
    // const { navigation, baseCurrency, quoteCurrency } = this.props;
    // const { selectedCurrency, type } = navigation.state.params;
    // const { type } = navigation.state.params;
    // let comparisonCurrency = baseCurrency;
    // if (type === 'quote') {
    //   comparisonCurrency = quoteCurrency;
    // }

    const { navigation, themeColor } = this.props;
    const { selectedCurrency } = navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <SafeAreaView>
          <FlatList
            data={currencies}
            renderItem={({ item }) => (
              <ListItem
                text={item}
                selected={item === selectedCurrency}
                onPress={() => this.handlePress(item)}
                iconBackground={themeColor}
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
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  themeColor: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    themeColor: state.themes.themeColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
