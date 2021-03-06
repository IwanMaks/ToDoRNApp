import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {MainScreen} from "./src/screens/MainScreen";
import AppLoading from "expo-app-loading";
import {bootstrap} from "./src/bootstrap";
import {StartScreen} from "./src/screens/StartScreen";
import {TaskDetailsScreen} from "./src/screens/TaskDetailsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ProfileScreen} from "./src/screens/ProfileScreen";
import {ActivityScreen} from "./src/screens/ActivityScreen";
import {ScheduleScreen} from "./src/screens/ScheduleScreen";
import {NewTask} from "./src/screens/NewTask";
import {Provider} from "react-redux";
import {store} from "./src/store";


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
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
                <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Activity" component={ActivityScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Schedule" component={ScheduleScreen} options={{headerShown: false}}/>
                <Stack.Screen name="NewTask" component={NewTask} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
