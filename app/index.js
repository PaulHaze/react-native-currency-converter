import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: 'rgba(255,255,255,0.9)',
  $border: '#E2E2E2',
  $inputText: '#797979',
});

export default () => <Home />;
