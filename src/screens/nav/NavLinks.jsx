import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Constants
import { LinearGradient } from 'expo-linear-gradient';
import { COLOURS, SIZES } from '../../constants';
import Header from '../../components/common/Header';

const NavLinks = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <Header name='Nav' />

        <View style={styles.container}>
          <Text>NavLinks</Text>
          {/* Buttons */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.buttonText}>See Your Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Account')}
          >
            <Text style={styles.buttonText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Create Playlist')}
          >
            <Text style={styles.buttonText}>Create Playlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Playlists')}
          >
            <Text style={styles.buttonText}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Upload')}
          >
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Convert')}
          >
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Connect Device')}
          >
            <Text style={styles.buttonText}>Connect Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('My Device')}
          >
            <Text style={styles.buttonText}>My Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Edit Playlist')}
          >
            <Text style={styles.buttonText}>Edit Playlist</Text>
          </TouchableOpacity>
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
    marginBottom: 16,
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

export default NavLinks;
