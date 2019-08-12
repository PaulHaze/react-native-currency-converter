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
  };

  constructor(props) {
    super(props);

    this.state = {
      currencyAmount: 100,
      exchangeAmount: 69.67,
      stateBaseCurrency: 'AUD',
      stateQuoteCurrency: 'USD',
      exchangeRate: 0.6997,
    };
  }

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
    // this.setState(prevState => ({
    //   baseCurrency: prevState.quoteCurrency,
    //   quoteCurrency: prevState.baseCurrency,
    //   currencyAmount: prevState.exchangeAmount,
    //   exchangeAmount: prevState.currencyAmount,
    // }));
  };

  handleTextChange = value => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(value));
    this.setState({
      currencyAmount: Number(value),
    });
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      currencyAmount,
      exchangeAmount,
      exchangeRate,
    } = this.state;
    // const { baseCurrency, quoteCurrency } = this.props;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            keyboardType="numeric"
            buttonText={this.props.baseCurrency}
            defaultValue={currencyAmount.toString()}
            onPress={this.handlePressBaseCurrency}
            onChangeText={this.handleTextChange}
          />
          <SwitchCurrencyButton
            baseCurr={baseCurrency}
            quoteCurr={quoteCurrency}
            exchangeRate={exchangeRate}
            onPress={this.handleSwitchCurrencies}
          />
          <LastConverted
            date={CONVERSION_DATE}
            base={baseCurrency}
            quote={quoteCurrency}
            exchangeRate={exchangeRate}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            defaultValue={exchangeAmount.toString()}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // const { baseCurrency, quoteCurrency } = state.currencies;
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  return {
    baseCurrency,
    quoteCurrency,
  };
};

export default connect(mapStateToProps)(Home);
