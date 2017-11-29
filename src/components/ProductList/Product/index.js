/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Product = ({ product: { image, title, description, price } }) => (
  <View style={styles.container}>
    <Icon name="ios-checkmark-circle-outline" size={24} style={styles.checkIcon} />
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
);

export default Product;
