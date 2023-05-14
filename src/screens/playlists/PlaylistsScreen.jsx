import React, { useState } from 'react';
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

const PlaylistsScreen = () => {
  const navigation = useNavigation();

  const [playlistsList, setPlaylistsList] = useState([
    { id: 1, title: 'Heavy Metal', songsList: ['getsome', 'badgirl', 'man in the mirror', 'posion', 'mustang sally', 'sweet caroline'] },
    { id: 2, title: 'Jazz Smooth', songsList: ['getsome', 'badgirl', 'man in the mirror', 'posion', 'mustang sally', 'sweet caroline'] },
    { id: 3, title: 'Original Stuff', songsList: ['getsome', 'badgirl', 'man in the mirror', 'posion', 'mustang sally', 'sweet caroline'] },
    { id: 4, title: 'Random Mix', songsList: ['getsome', 'badgirl', 'man in the mirror', 'posion', 'mustang sally', 'sweet caroline'] },
    { id: 5, title: 'Recommended Plan', songsList: ['getsome', 'badgirl', 'man in the mirror', 'posion', 'mustang sally', 'sweet caroline'] },
  ])

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          {/* Header */}
          <Header name='Playlists' />

          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.titlesText}>Current Playlists</Text>
            {/* Edit playlists button */}
            <View style={styles.rightContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Nav')}>
                <Text
                  style={styles.smallButton}
                  onPress={() => Alert.alert('New Button pressed')}
                >NEW</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Playlists */}
          <View style={styles.playlistContainer}>
            <View style={styles.playlistDataContainer}>
              <View style={styles.dataContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.dataText}>{playlistsList[0].id} {playlistsList[0].title} </Text>
                </View>

                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Edit Playlist', playlistsList[0])}
                >
                  <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dataContainerOdd}>
                <View style={styles.textContainer}>
                <Text style={styles.dataText}>{playlistsList[1].id} {playlistsList[1].title} </Text>
                </View>

                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Edit Playlist', playlistsList[1])}
                >
                  <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dataContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.dataText}>{playlistsList[2].id} {playlistsList[2].title} </Text>
                </View>

                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Edit Playlist', playlistsList[2])}
                >
                  <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dataContainerOdd}>
                <View style={styles.textContainer}>
                <Text style={styles.dataText}>{playlistsList[3].id} {playlistsList[3].title} </Text>
                </View>

                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Edit Playlist', playlistsList[3])}
                >
                  <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dataContainer}>
                <View style={styles.textContainer}>
                <Text style={styles.dataText}>{playlistsList[4].id} {playlistsList[4].title} </Text>
                </View>

                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Edit Playlist', playlistsList[4])}
                >
                  <Text style={styles.buttonText}>EDIT</Text>
                </TouchableOpacity>
              </View>
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
    alignItems: 'center',
  },
  rightContainer: { justifyContent: 'center' },
  leftContainer: { justifyContent: 'center' },
  playlistContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
    paddingVertical: 2,
    paddingHorizontal: 22,
  },
  playlistDataContainer: {
    display: 'flex',
    width: '100%',
  },
  dataContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffffff40',
    alignContent: 'center',
    padding: 4,
  },
  dataContainerOdd: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f0f0f050',
    alignContent: 'center',
    padding: 4,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  titlesText: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
  },
  dataText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    paddingHorizontal: 4,
  },
  newButton: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  smallButton: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 4,
  },
});

export default PlaylistsScreen;
