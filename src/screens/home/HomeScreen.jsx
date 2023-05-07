import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Device Data
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>HomeScreenTom</Text>
      <View>
        <Text>Don't have an account? </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text>See Your Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Buy Cheese</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeScreen;
