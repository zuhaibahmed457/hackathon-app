import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


import Signup from './screen/signup';
import Login from './screen/login'


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen name="Sign Up" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
