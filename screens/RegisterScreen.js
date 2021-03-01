import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import { StyleSheet, View } from 'react-native'
import { HeaderBackButton } from '@react-navigation/stack';
import { auth } from "../firebase"

const registerScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            })
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create an Account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder='Full Name' autoFocus type='text' value={name}
                    onChangeText={text => setName(text)}
                />
                <Input placeholder='Email' type='email' value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input placeholder='Password' type='password' secureTextEntry value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input placeholder='Profile Picture URL (optional)' type='text' value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button containerStyle={styles.button} raised onPress={register} title="Register" />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default registerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});