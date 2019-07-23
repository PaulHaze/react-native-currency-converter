/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { SwitchCurrencyButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const API_KEY = 'b75149abcbe55c561817ab5976d0a184';
const API_URL = 'http://data.fixer.io/api/';
const CONVERSION_DATE = new Date();

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyAmount: 100,
      exchangeAmount: 69.67,
      baseCurrency: 'AUD',
      quoteCurrency: 'USD',
      exchangeRate: 0.6997,
    };
  }

  handlePressBaseCurrency = () => {
    console.log('base currency pressed');
  };

  handlePressQuoteCurrency = () => {
    console.log('quote currency pressed');
  };

  handleOptionsPress = () => {
    console.log('options pressed');
  };

  handleSwitchCurrencies = () => {
    this.setState(prevState => ({
      baseCurrency: prevState.quoteCurrency,
      quoteCurrency: prevState.baseCurrency,
      currencyAmount: prevState.exchangeAmount,
      exchangeAmount: prevState.currencyAmount,
    }));
  };

  handleTextChange = value => {
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
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <KeyboardAvoidingView behavior="padding">
          <InputWithButton
            keyboardType="numeric"
            buttonText={baseCurrency}
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

export default Home;
