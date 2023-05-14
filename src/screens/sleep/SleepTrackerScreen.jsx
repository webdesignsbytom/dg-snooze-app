import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
// Constants
import { COLOURS, SIZES } from '../../constants';
import Header from '../../components/common/Header';

const SleepTrackerScreen = () => {
  const navigation = useNavigation()

  const [recording, setRecording] = useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <Header />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.textleft}>Sleep Tracker</Text>
            <Text style={styles.textright}>20 May 2023</Text>
          </View>

          {/* Box container */}
          <View style={styles.sleepDataContainer}>
            <Image
              style={styles.mainImage}
              source={{
                uri: 'https://cdn.windowsreport.com/wp-content/uploads/2020/09/Equalizer-1-930x620.jpg',
              }}
            />
          </View>

          {/* Start Button */}
          <TouchableOpacity
            style={styles.bigButton}
            onPress={recording ? stopRecording : startRecording}
          >
            <Text style={styles.buttonText}>Start Tracking</Text>
          </TouchableOpacity>

          {/* Box container */}
          <View style={styles.infoContainer}>
            <Text style={styles.smallText}>
              Place your device as close as possible to where your head is
              resting.{' '}
            </Text>
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
    paddingHorizontal: 22,
    paddingVertical: 44,
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
  sleepDataContainer: {
    minHeight: '50%',
    backgroundColor: '#01040f',
    borderColor: 'black',
    marginTop: 22,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlesText: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'left',
  },
  bigButton: {
    alignItems: 'center',
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 22,
  },
  buttonText: {
    color: COLOURS.text,
    fontSize: SIZES.medium,
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
  smallText: {
    color: COLOURS.text,
    fontSize: SIZES.small,
    textAlign: 'center',
  },
  mainImage: {
    width: '100%',
    height: '50%',
    transform: 'rotate(90deg)',
  },
});

export default SleepTrackerScreen;
