import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
// Constants
import { COLOURS, SIZES } from '../../constants';
// Device Data
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <View style={styles.secondContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/psmall.png')}
          />
          <View>
            <Text style={styles.textBox}>Welcome To</Text>
            <Text style={styles.header}>Pistachio-Snooze</Text>

            {/* Buttons */}
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
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: deviceWidth,
    height: deviceHeight,
  },
  container: {
    width: '100%',
    height: '100%',
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
    padding: 12,
    marginTop: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
  },
});

export default WelcomeScreen;
