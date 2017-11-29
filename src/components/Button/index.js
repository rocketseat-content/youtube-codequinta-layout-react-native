/* Core */
import React from 'react';

/* Presentational */
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ style, children, type }) => (
  <TouchableOpacity
    style={[
      styles.container,
      style,
      type ? styles[`button-${type}`] : {},
    ]}
    onPress={() => {}}
  >
    <Text style={[
      styles.text,
      type ? styles[`text-${type}`] : {},
    ]}>
      { children }
    </Text>
  </TouchableOpacity>
);

export default Button;
