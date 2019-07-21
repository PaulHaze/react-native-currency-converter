import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#ffffff',
  $offWhite: 'rgba(255,255,255,0.8)',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#eff6f0',
});

export default () => <Home />;
