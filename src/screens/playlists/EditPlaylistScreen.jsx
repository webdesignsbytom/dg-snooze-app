import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// Components
import Header from '../../components/common/Header';
// Constants
import { COLOURS, SIZES } from '../../constants';

const EditPlaylistScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          {/* Header */}
          <Header name='Edit Playlist' />

          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.titlesText}>Playlist: Heavy Metal</Text>
            {/* Edit playlists button */}
            <View style={styles.rightContainer}>
            <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Playlists')}
                >
                  <Text style={styles.buttonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
          </View>

          {/* Main */}
          <View style={styles.playlistContainer}>
            
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
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    paddingHorizontal: 22,
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 22,
    paddingHorizontal: 22,
  },
  rightContainer: { justifyContent: 'center' },
  leftContainer: { justifyContent: 'center' },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  titlesText: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
  },
  smallButton: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 4,
  },
});

export default EditPlaylistScreen;
