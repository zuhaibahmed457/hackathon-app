import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from './firebaseConfig';
import Signup from './signup';

export default function Login({ navigation }) {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    console.log("Login")
    const onLogin = async () => {
        try {
            if (email !== '' && password !== '') {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("Done :")
                navigation.navigate('Home')
            }
        } catch (error) {
            console.log(error)
            console.log("Not Done :")
            navigation.navigate('Home')
        }
    };
    return (
        <View style={styles.container}>
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
            <Button title="login" onPress={onLogin} />
            <Text
                style={styles.loginText}
                onPress={() => navigation.navigate("Signup")}>
                Don't Have an Account? Click Here
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
