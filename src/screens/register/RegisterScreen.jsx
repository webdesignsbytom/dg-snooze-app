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
// Components
import { LinearGradient } from 'expo-linear-gradient';
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
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
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
              <Text style={styles.buttonText}>Sign Up Now</Text>
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
  },
  subtitle: {
    color: COLOURS.text,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 6,
    marginBottom: 16,
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
    borderRadius: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    height: 50,
    padding: 10,
    borderRadius: 10
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
export default RegisterScreen;
