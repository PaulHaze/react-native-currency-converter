import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#ffffff',
  $offWhite: 'rgba(255,255,255,0.85)',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#eff6f0',
  $darkText: '#343434',
});

export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);
