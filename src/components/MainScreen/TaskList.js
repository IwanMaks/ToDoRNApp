import React from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";
import {AppDeadline} from "../../ui/AppDeadline";
import {THEME} from "../../theme/theme";
import {Task} from "../Task";
import {AppTitle} from "../../ui/AppTitle";

export const TaskList = () => {
    return (
        <View style={styles.tasksList}>
            <AppTitle text='My Tasks' />
            <ScrollView style={styles.deadlines} horizontal={true}>
                <AppDeadline text='Recently' style={{color: THEME.ascent2_dark}} />
                <AppDeadline style={{color: THEME.textSecondary_dark}}/>
                <AppDeadline text='Upcoming' style={{color: THEME.textSecondary_dark}}/>
                <AppDeadline text='Later' style={{color: THEME.textSecondary_dark}}/>
                <AppDeadline text='Later' style={{color: THEME.textSecondary_dark, marginRight: 0}}/>
            </ScrollView>
            <ScrollView style={styles.tasks} horizontal={true}>
                <Task lineColor={THEME.label1_dark}/>
                <Task lineColor={THEME.label3_dark}/>
                <Task lineColor={THEME.label2_dark}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksList: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start'
    },
    tasksTitle: {
        marginBottom: 24,
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        paddingHorizontal: 24,
        lineHeight: 31
    },
    deadlines: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 24
    },
    tasks: {
        flexDirection: 'row'
    }
})