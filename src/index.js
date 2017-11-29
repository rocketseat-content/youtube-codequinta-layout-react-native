import React from 'react';
import { View } from 'react-native';

import './config/ReactotronConfig';

const App = () => (
  <View style={{ flex: 1 }} />
);

export default console.tron.overlay(App);
