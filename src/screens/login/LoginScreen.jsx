import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// Constants
import { COLOURS, SIZES } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
// Device Data
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const [text, onChangeText] = React.useState('Username');
  const [pass, onChangePass] = React.useState('Password');

  const navigation = useNavigation();

  const buySomeCheese = () => {
    console.log('Cheese purchase');
  };

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        {/* Main Content */}
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../../assets/psmall.png')}
          />
          <View style={styles.secondaryContainer}>
            <Text style={styles.title}>Login</Text>

            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <TextInput
                style={styles.input}
                onChangePass={onChangePass}
                value={pass}
              />
            </SafeAreaView>

            <TouchableOpacity style={styles.button} onPress={buySomeCheese}>
              <Text style={styles.buttonText}>Login Now</Text>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
              <Text style={styles.text}>Don't have an account?</Text>
              <Text style={styles.text}>
                Click{' '}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Sign Up')}
                >
                  <Text style={styles.link}>HERE</Text>
                </TouchableOpacity>{' '}
                to sign up!
              </Text>
            </View>
          </View>
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
  secondaryContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  title: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 16
  },
  subtitle: {
    color: COLOURS.text,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
  link: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    marginTop: 10,
  },
  linkContainer: {
    marginTop: 16,
  },
  input: {
    height: 50,
    padding: 10,
    marginBottom: 10,
    backgroundColor: COLOURS.gray,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
  },
  buttonText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
  },
});
export default LoginScreen;
