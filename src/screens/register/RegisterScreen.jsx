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
// Constants
import { COLOURS, SIZES } from '../../constants';
// Components
import Header from '../../components/common/Header';
import { useNavigation } from '@react-navigation/native';
// Device Data
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const buySomeCheese = () => {
    console.log('Cheese purchase');
    console.log('email', email);
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
          <Text style={styles.title}>Register</Text>

          <Text style={styles.subtitle}>Start Your Journey Today!</Text>

          <SafeAreaView>
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor='#AFAFAF'
              onChangeText={(email) => setEmail(email)}
              value={email}
            />

            <TextInput
              style={styles.input}
              placeholder='Username'
              placeholderTextColor='#AFAFAF'
              onChangeText={(username) => setUsername(username)}
              value={username}
            />

            <TextInput
              style={styles.input}
              placeholder='Password'
              placeholderTextColor='#AFAFAF'
              onChangePass={(password) => setPassword(password)}
              value={password}
            />

            <TextInput
              value={password}
              style={styles.input}
              placeholder='Confirm Password'
              placeholderTextColor='#AFAFAF'
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
          </SafeAreaView>

          <TouchableOpacity style={styles.button} onPress={buySomeCheese}>
            <Text>Sign Up Now</Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <Text style={styles.text}>
              Click{' '}
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>HERE</Text>
              </TouchableOpacity>{' '}
              to Login!
            </Text>
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
    marginTop: 80,
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
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    maxWidth: 300,
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
    maxWidth: 300,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
export default RegisterScreen;
