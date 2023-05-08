import React from 'react';
// Pages
import HomeScreen from './src/screens/home/HomeScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
// Utils
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
import NavLinks from './src/screens/nav/NavLinks';


const Stack = createStackNavigator();


function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={NavLinks} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
        <App />
    </NavigationContainer>
  )
}