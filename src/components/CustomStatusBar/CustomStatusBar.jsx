import {StatusBar} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';

export default function CustomStatusBar() {
  return <StatusBar backgroundColor={Colors.primary.dark} />;
}
