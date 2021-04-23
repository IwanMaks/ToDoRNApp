import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {MainScreen} from "./src/screens/MainScreen";
import AppLoading from "expo-app-loading";
import {bootstrap} from "./src/bootstrap";
import {StartScreen} from "./src/screens/StartScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
        <AppLoading
            startAsync={bootstrap}
            onFinish={() => setIsReady(true)}
            onError={err => console.log(err)}
        />
    )
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
