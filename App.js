import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Hooks
import { useTogglePasswordVisibility } from './src/hooks/useTogglePasswordVisibility';
// Screen
import HomeScreen from './src/screens/home/HomeScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
import NavLinks from './src/screens/nav/NavLinks';
import AccountScreen from './src/screens/account/AccountScreen';
import CreatePlaylistScreen from './src/screens/playlists/CreatePlaylistScreen';
import PlaylistsScreen from './src/screens/playlists/PlaylistsScreen';
import UploadSongScreen from './src/screens/playlists/UploadSongScreen';
import ConvertSongScreen from './src/screens/playlists/ConvertSongScreen';
import ConnectDeviceScreen from './src/screens/device/ConnectDeviceScreen';
import DeviceDataScreen from './src/screens/device/DeviceDataScreen';
import EditPlaylistScreen from './src/screens/playlists/EditPlaylistScreen';
import CalanderScreen from './src/screens/calander/CalanderScreen';
import AccountStatsScreen from './src/screens/account/AccountStatsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Nav' component={NavLinks} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Account' component={AccountScreen} />
      <Stack.Screen name='Calander' component={CalanderScreen} />
      <Stack.Screen name='Stats' component={AccountStatsScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Sign Up' component={RegisterScreen} />
      <Stack.Screen name='Create Playlist' component={CreatePlaylistScreen} />
      <Stack.Screen name='Playlists' component={PlaylistsScreen} />
      <Stack.Screen name='Upload' component={UploadSongScreen} />
      <Stack.Screen name='Convert' component={ConvertSongScreen} />
      <Stack.Screen name='Connect Device' component={ConnectDeviceScreen} />
      <Stack.Screen name='My Device' component={DeviceDataScreen} />
      <Stack.Screen name='Edit Playlist' component={EditPlaylistScreen} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
