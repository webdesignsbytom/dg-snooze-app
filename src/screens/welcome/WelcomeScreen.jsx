import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { COLOURS, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/psmall.png')}
        />
        <View>
          <Text style={styles.textBox}>Welcome To</Text>
          <Text style={styles.header}>Diggeree-Snooze</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>See Your Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Sign Up')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: 50,
  },
  textBox: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
  },
  header: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    fontWeight: '900',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    padding: 10,
    marginTop: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: COLOURS.text,
  },
});

export default WelcomeScreen;
