import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
StyleSheet,
Text,
View,
TextInput,
Button,
Image,
TouchableOpacity,
} from "react-native";

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.signUp}>Welcome back !  BookNet </Text>
                </View>
                <StatusBar style="auto" />
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Username or Email"
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
                    <View style={styles.loginBtn}>
                        <Text style={styles.login} onPress={()=> navigation.navigate("Home")}>
                            Login
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Image source={{
                            width:300,
                            height:150,
                            marginBottom:20,
                            alignItems: 'center',
                            uri:"https://images.gr-assets.com/misc/1637192348-1637192348_goodreads_misc.png"
                    }}
                    />
                    <TouchableOpacity>
                        <Text style={styles.createAccount} onPress={()=> navigation.navigate("SignUp")}>
                            Don't have an account?
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
            padding: 10,
            marginLeft: 20,
            fontSize: 15,
        },
        forgot_button: {
            height: 30,
            marginBottom: 20,
            color: 'darkred',
        },
        loginBtn: {
            width: "30%",
            borderRadius: 25,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 10,
            backgroundColor: "darkorange",
        },
        login: {
            color: 'darkred',
            fontSize: 18,
            fontWeight: 'bold',
            opacity: 0.6,
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
            paddingBottom:50,
            paddingTop: 0,
            paddingRight: 100,
            marginTop: 100,
            alignItems: 'center',
        },
        createAccount: {
            height: 30,
            marginBottom: 10,
            marginTop: 30,
            color: 'darkred',
        },
    });
    
export default Login;