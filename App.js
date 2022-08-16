import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import Login from "./navigation/screens/Login";
import SignUp from "./navigation/screens/SignUp";
import HomeScreen from "./navigation/screens/HomeScreen";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="Home" component={MainContainer} />
      </stack.Navigator>
      {/* // <MainContainer/> */}
    </NavigationContainer>
  );
}

export default App;
