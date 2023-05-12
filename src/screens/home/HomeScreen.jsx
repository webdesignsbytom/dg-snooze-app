import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOURS, SIZES } from '../../constants';
import Header from '../../components/common/Header';

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Header name='Home' />
          <View style={styles.mainContainer}>
            {/* // User and data bar */}
            <View style={styles.titleContainer}>
              <Text style={styles.textleft}>Tom33Codin</Text>
              <Text style={styles.textright}>Day: 3 / 94</Text>
            </View>

            {/* Buttons [connect, calander, stats] */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Profile')}
              >
                <Text style={styles.buttonText}>Connect To Device</Text>
              </TouchableOpacity>
              {/* Two smaller buttons */}
              <View style={styles.doubleButtonsContainer}>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Calander')}
                >
                  <Text style={styles.buttonText}>Calander</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Stats')}
                >
                  <Text style={styles.buttonText}>Stats</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Overview */}
            <View style={styles.playlistContainer}>
              <Text style={styles.playlistTitle}>Todays Playlist</Text>
              <View style={styles.playlistDataContainer}>
                <Text style={styles.dataText}>
                  1. Baker Street, Gerry Raferty, 05:22
                </Text>
                <Text style={styles.dataTextOdd}>
                  2. Thunder Road, Bruce Springsteen, 05:22
                </Text>
                <Text style={styles.dataText}>
                  3. Back In Black, AC/DC, 05:22
                </Text>
                <Text style={styles.dataTextOdd}>
                  4. We Will Rock You, Queen, 05:22
                </Text>
                <Text style={styles.dataText}>5. Love Gun, Kiss, 05:22</Text>
                <Text style={styles.dataTextOdd}>Total Time: 0:27:23</Text>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('Profile')}
                >
                  <Text style={styles.buttonText}>Start Exercise</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.editContainer}>
              <Text style={styles.playlistTitle}>Edit Playlists</Text>
              {/* Buttons [edit playlist, upload song, x, y] */}
            <View style={styles.buttonsContainer}>
              {/* Two small buttons */}
            <View style={styles.doubleButtonsContainer}>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Playlists')}
                >
                  <Text style={styles.buttonText}>Edit Playlists</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Upload')}
                >
                  <Text style={styles.buttonText}>Upload Song</Text>
                </TouchableOpacity>
              </View>
              {/* Two smaller buttons */}
              <View style={styles.doubleButtonsContainer}>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Calander')}
                >
                  <Text style={styles.buttonText}>Track Sleep</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => navigation.navigate('Stats')}
                >
                  <Text style={styles.buttonText}>Record</Text>
                </TouchableOpacity>
              </View>
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
    // backgroundColor: 'red',
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
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
  },
  doubleButtonsContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 8,
    gap: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  playlistContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  playlistDataContainer: {
    display: 'flex',
    width: '100%',
  },
  editContainer: {
    display: 'flex',
    width: '100%',
    marginTop: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  smallButton: {
    backgroundColor: COLOURS.secondary,
    height: 50,
    width: '49%',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
  },
  textleft: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
  },
  textright: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'right',
  },
  buttonText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
  },
  dataText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    backgroundColor: '#ffffff40',
    paddingHorizontal: 4,
  },
  dataTextOdd: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
    backgroundColor: '#f0f0f050',
    paddingHorizontal: 4,
  },
  playlistTitle: {
    color: COLOURS.text,
    fontSize: SIZES.xLarge,
    marginVertical: 6,
    paddingHorizontal: 4,
  },
});

export default HomeScreen;
