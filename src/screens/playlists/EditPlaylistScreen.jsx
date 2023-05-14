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

const EditPlaylistScreen = ({ route }) => {
  const navigation = useNavigation();
  console.log('route:', route);
  const { id, title, songsList } = route.params;
  console.log('id:', id);
  console.log('title:', title);

  const deleteSongFromPlaylist = (song) => {
    console.log('Delete', song);
  };

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
            <Text style={styles.titlesText}>Playlist: {title}</Text>
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

          {/* Songs list */}
          <View style={styles.songsContainer}>
            <Text style={styles.songsTitle}>Songs</Text>
            {songsList.map((song, index) => {
              return (
                <View key={index} style={styles.dataContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.dataText}>{song} </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.smallButton}
                    onPress={() => deleteSongFromPlaylist(song)}
                  >
                    <Text style={styles.buttonText}>EDIT</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <View style={styles.timeContainer}>
          <Text style={styles.timeText}>Total Length: 21:22</Text>

</View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.bigButton}
              onPress={() => deleteSongFromPlaylist(song)}
            >
              <Text style={styles.buttonText}>Add Song</Text>
            </TouchableOpacity>
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
  songsContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
    paddingHorizontal: 22,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
    paddingHorizontal: 22,
  },
  timeContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
    paddingHorizontal: 22,
    
  },
  rightContainer: { justifyContent: 'center' },
  leftContainer: { justifyContent: 'center' },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
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
  titlesText: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
    marginBottom: 8,
  },
  songsTitle: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
    marginBottom: 22,
  },
  smallButton: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    padding: 10,
    borderRadius: 4,
  },
  bigButton: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
  },
  timeText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    textAlign: 'center',

  },
  dataText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    paddingHorizontal: 4,
    textTransform: 'capitalize'
  },
});

export default EditPlaylistScreen;
