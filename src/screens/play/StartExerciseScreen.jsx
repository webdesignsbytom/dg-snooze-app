import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Animate
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
// Constants
import { COLOURS, SIZES, SHADOWS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const StartExerciseScreen = () => {
  const navigation = useNavigation();

  const glowAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withRepeat(
          withSequence(
            withTiming(1.2, { duration: 1500 }),
            withTiming(1.6, { duration: 1500 })
          ),
          -1,
          true
        ),
      },
    ],
  }));

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['#09203f', '#537895']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <Text style={styles.titleText}>Start Exercise</Text>

          <View style={styles.glowButtonContainer}>
            <Animated.View style={[styles.glowContainer, glowAnimation]}>
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate('Profile')}
              >
                <Text style={styles.buttonText}>START</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Text style={styles.text}>Make sure your device is charged</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowButtonContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  glowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    bottom: 0,
    left: 0,
    right: 4,
  },
  startButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 50,
    borderRadius: 200,
    shadowOpacity: 1,
    shadowRadius: 300,
    backgroundColor: 'black',
    opacity: 0.5,
    // borderColor: 'rgba(255, 255, 255,0.5)',
    // borderWidth: 2,
  },
  titleText: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    textAlign: 'center',
  },
  text: {
    color: COLOURS.text,
    fontSize: SIZES.large,
    textAlign: 'center',
  },
  buttonText: {
    color: COLOURS.text,
    fontSize: SIZES.xxLarge,
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 15,
  },
});

export default StartExerciseScreen;
