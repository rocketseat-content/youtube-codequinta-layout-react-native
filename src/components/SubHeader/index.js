/* Core */
import React from 'react';

/* Presentational */
import { View, Text, Image } from 'react-native';
import Button from '../Button';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const SubHeader = () => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://fthmb.tqn.com/DrRD0vrmFfmZyd41vHbMhUAoeLA=/768x0/filters:no_upscale()/GettyImages-545840549-58e7e5ca5f9b58ef7e53fc0f.jpg' }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Scarlett Johansson</Text>
        <Text style={styles.bio}>Editorial Director @sssense. Fashion addict & notorius shoe connossieur.</Text>

        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Message</Button>
          <Button type="outline">Follow</Button>
        </View>
      </View>
    </View>
  </View>
);

export default SubHeader;
