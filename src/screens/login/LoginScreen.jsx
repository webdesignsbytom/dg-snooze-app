import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import React, { useState } from 'react';
// Constants
import { COLOURS, SIZES } from '../../constants';
// Components
import Header from '../../components/common/Header';
// Device Data
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LoginScreen = () => {

  const [text, onChangeText] = React.useState('Username');
  const [pass, onChangePass] = React.useState('Password');

  const buySomeCheese = () => {
    console.log('Cheese purchase');
  };

  return (
    <View style={styles.screen}>
      <Header />
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
            <Text>Login Now</Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <Text style={styles.text}>Don't have an account?</Text>
            <Text style={styles.text}>Click HERE to sign up!</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: COLOURS.primary,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.primary,
    alignItems: 'center',
  },
  secondaryContainer: {
    width: '80%',
    backgroundColor: COLOURS.primary,
    justifyContent: 'center',
  },
  title: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
    fontWeight: '900',
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLOURS.gray,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
export default LoginScreen;
