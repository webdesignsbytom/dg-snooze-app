import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Constants
import { COLOURS } from '../../constants';

const Header = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/psmall.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.logo}
            source={require('../../../assets/psmall.png')}
          />
        </TouchableOpacity>
      </View>
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
    display: 'flex',
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default Header;
