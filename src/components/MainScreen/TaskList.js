import React from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";
import {AppDeadline} from "../../ui/AppDeadline";
import {THEME} from "../../theme/theme";
import {Task} from "../Task";
import {AppTitle} from "../../ui/AppTitle";

export const TaskList = ({navigation}) => {
    return (
        <View style={styles.tasksList}>
            <AppTitle text='My Tasks' style={{marginBottom: 23, paddingHorizontal: 24}} />
            <ScrollView style={styles.deadlines} horizontal={true} showsHorizontalScrollIndicator={false}>
                <AppDeadline text='Recently' style={{color: THEME.ascent2_dark}} />
                <AppDeadline style={{color: THEME.textSecondary_dark}}/>
                <AppDeadline text='Upcoming' style={{color: THEME.textSecondary_dark}}/>
                <AppDeadline text='Later' style={{color: THEME.textSecondary_dark}}/>
                <AppDeadline text='Later' style={{color: THEME.textSecondary_dark, marginRight: 0}}/>
            </ScrollView>
            <ScrollView style={styles.tasks} horizontal={true} showsHorizontalScrollIndicator={false}>
                <Task lineColor={THEME.label1_dark} navigation={navigation}/>
                <Task lineColor={THEME.label3_dark} navigation={navigation}/>
                <Task lineColor={THEME.label2_dark} navigation={navigation}/>
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
    deadlines: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginBottom: 24
    },
    tasks: {
        flexDirection: 'row'
    }
})