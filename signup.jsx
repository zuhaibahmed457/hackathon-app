import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from './firebaseConfig';


import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Signup({ navigation }) {
  const [displayName, setDisplayName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onHandleSignup = async () => {
     try {
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth ,email, password);
        console.log("Done :")
        navigation.navigate('Login')
      }
      else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
      console.log("Not Done :")

      // setSignupError(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={displayName}
        onChangeText={(val) => setDisplayName(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => setEmail(val)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => setPassword(val)}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={onHandleSignup} />

      <Text
        style={styles.loginText}
      onPress={()=> Alert.alert("Hello")}>
        Already Registered? Click here to login
      </Text>
    </View>

  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
