import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
StyleSheet,
Text,
View,
TextInput,
Button,
TouchableOpacity,
} from "react-native";

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.signUp}>Sign Up</Text>
                </View>
                <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter your Name"
                            placeholderTextColor="white"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter your Email"
                            placeholderTextColor="white"
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Confirm Password"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <View style={styles.loginBt}>
                        <Text style={styles.login} onPress={()=> navigation.navigate("Home")}>
                            Sign Up
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.Account} onPress={()=> navigation.navigate("Login")}>
                            Already have an account? Login
                        </Text>
                    </TouchableOpacity>
            </View>
         );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
        },
        inputView: {
            backgroundColor: "grey",
            opacity: 0.5,
            borderRadius: 15,
            width: "80%",
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },
        TextInput: {
            height: 50,
            flex: 1,
            marginLeft: 20,
            fontSize: 15,
        },
        forgot_button: {
            height: 30,
            marginBottom: 30,
            color: 'blue',
        },
        loginBtn: {
            width: "70%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            backgroundColor: "darkred",
        },
        loginBt: {
            width: "30%",
            borderRadius: 25,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
            backgroundColor: "darkorange",
        },
        loginText: {
            color: 'white',
            fontSize: 15,
            opacity: 0.7,
        },
        signUp: {
            color: 'darkred',
            fontSize: 26,
            fontWeight: 'bold',
            paddingBottom:30,
            paddingRight: 150,
            marginTop: 10,
        },
        login: {
            color: 'darkred',
            fontSize: 18,
            fontWeight: 'bold',
            opacity: 0.6,
        },
        createAccount: {
            height: 30,
            marginBottom: 10,
            marginTop: 50,
            color: 'blue',
        },
        remember_button: {
            height: 30,
            marginBottom: 20,
            marginTop: 10,
            color: 'blue',
        },
        Account: {
            color: 'darkred',
            marginTop: 30,
        },
    });

    export default SignUp;