import React from 'react'
import {View, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {StatusBar} from "expo-status-bar";
import {TaskList} from "../components/MainScreen/TaskList";
import {Tags} from "../components/MainScreen/Tags";
import {TaskInfo} from "../components/MainScreen/TaskInfo";
import {TaskSearchAndInfo} from "../components/MainScreen/TaskSearchAndAdd";
import {Header} from "../components/MainScreen/Header";

export const MainScreen = (props) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style='light'/>
            <Header />
            <TaskSearchAndInfo />
            <TaskInfo />
            <Tags />
            <TaskList />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: THEME.base_dark,
    },
})