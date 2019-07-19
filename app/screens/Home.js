import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { SwitchCurrencyButton } from '../components/Buttons';

// const TEMP_BASE_CURRENCY = 'AUD';
// const TEMP_QUOTE_CURRENCY = 'USD';
// const TEMP_QUOTE_PRICE = '69.84';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyAmount: 100,
      exchangeAmount: 69.67,
      baseCurrency: 'AUD',
      quoteCurrency: 'USD',
      baseRate: 1,
      exchangeRate: 0.6997,
    };
  }

  handlePressBaseCurrency = () => {
    console.log('base currency pressed');
  };

  handlePressQuoteCurrency = () => {
    console.log('quote currency pressed');
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
      baseRate,
      exchangeRate,
    } = this.state;
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
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
        <InputWithButton
          buttonText={quoteCurrency}
          defaultValue={exchangeAmount.toString()}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;
