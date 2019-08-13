/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// REACT IMPORTS
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

// REDUX IMPORTS
import { connect } from 'react-redux';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

// COMPONENT IMPORTS
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { SwitchCurrencyButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

// API DETAILS
const API_KEY = 'b75149abcbe55c561817ab5976d0a184';
const API_URL = 'http://data.fixer.io/api/';
const CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    conversionDate: PropTypes.object,
  };

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  };

  handleSwitchCurrencies = () => {
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handleTextChange = value => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(value));
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      conversionDate,
      isFetching,
    } = this.props;

    const quotePrice = isFetching
      ? '...'
      : (amount * conversionRate).toFixed(2);

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            keyboardType="numeric"
            buttonText={baseCurrency}
            defaultValue={amount.toString()}
            onPress={this.handlePressBaseCurrency}
            onChangeText={this.handleTextChange}
          />
          <SwitchCurrencyButton
            baseCurr={baseCurrency}
            quoteCurr={quoteCurrency}
            exchangeRate={conversionRate.toString()}
            onPress={this.handleSwitchCurrencies}
          />
          <LastConverted
            date={conversionDate}
            base={baseCurrency}
            quote={quoteCurrency}
            exchangeRate={conversionRate}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            defaultValue={quotePrice.toString()}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency, amount, conversions } = state.currencies;
  const conversionSelector = conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate: rates[quoteCurrency] || 0,
    conversionDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
  };
};

export default connect(mapStateToProps)(Home);
