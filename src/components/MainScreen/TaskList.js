import React from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {AppDeadline} from "../../ui/AppDeadline";
import {THEME} from "../../theme/theme";
import {AppTitle} from "../../ui/AppTitle";
import {AppTasksList} from "../../ui/AppTasksList";

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
            <AppTasksList navigation={navigation} />
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
    }
})