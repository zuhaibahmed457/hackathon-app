import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../Login';
import SignupScreen from '../Signup';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerShown='false' initialRouteName="SignupScreen">
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}