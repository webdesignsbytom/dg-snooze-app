import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconComponentProvider, Icon } from '@react-native-material/core';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// Constants
import { COLOURS, SIZES } from '../../constants';

const Header = (name) => {
  const navigation = useNavigation();
  console.log('name', name.name);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name='home' size={48} color='lightgray' />
          </IconComponentProvider>
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <Text style={styles.headerText}>{name.name}</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Nav')}>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name='menu' size={48} color='lightgray' />
          </IconComponentProvider>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09203f',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 32,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
  logo: {
    width: 52,
    height: 52,
  },
  rightContainer: { justifyContent: 'center' },
  leftContainer: { justifyContent: 'center' },
  centerContainer: {
    justifyContent: 'center',
  },
  headerText: {
    color: COLOURS.text,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
  },
});

export default Header;
