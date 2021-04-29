import React from "react";
import {ScrollView, StyleSheet} from 'react-native'
import {Task} from "../components/MainScreen/Task";
import {THEME} from "../theme/theme";

export const AppTasksList = ({navigation}) => {
    return (
        <ScrollView style={styles.tasks} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Task lineColor={THEME.label1_dark} navigation={navigation}/>
            <Task lineColor={THEME.label3_dark} navigation={navigation}/>
            <Task lineColor={THEME.label2_dark} navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tasks: {
        flexDirection: 'row'
    }
})