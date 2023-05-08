import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
// Constants
import { COLOURS, SIZES } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const NavLinks = () => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Text>NavLinks</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavLinks;
