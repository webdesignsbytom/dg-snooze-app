import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Components
import Header from '../../components/common/Header';
// Constants
import { COLOURS, SIZES } from '../../constants';

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <Header name='Profile' />
        <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
});

export default ProfileScreen;
