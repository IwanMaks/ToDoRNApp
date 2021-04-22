import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MainScreen} from "./src/screens/MainScreen";
import AppLoading from "expo-app-loading";
import {bootstrap} from "./src/bootstrap";
import {StartScreen} from "./src/screens/StartScreen";

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
  return (
    <StartScreen/>
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
