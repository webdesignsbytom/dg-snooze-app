import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLOURS, SIZES } from '../../constants';

const LoginScreen = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    passwords: '',
  });
  const [text, onChangeText] = React.useState('Username');
  const [pass, onChangePass] = React.useState('Password');

  const buySomeCheese = () => {
    console.log('Cheese purchase')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen</Text>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.primary,
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: COLOURS.gray,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default LoginScreen;
