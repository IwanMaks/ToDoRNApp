import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {THEME} from "../../theme/theme";
import {TaskCard} from "../../ui/TaskCard";

export const TaskInfo = () => {
    return (
        <View style={styles.taskInfo}>
            <View style={styles.textInfoWrapper}>
                <Text style={styles.textInfoTitle}>Have total </Text>
                <Text style={styles.textInfoSubtitle}>18 Task</Text>
            </View>
            <View style={styles.mainTaskWrapper}>
                <TaskCard title='Pending' count={2} color={THEME.ascent4_dark} />
                <TaskCard title='Done' count={6} color={THEME.ascent1_dark} />
                <TaskCard title='To Do' count={8} color={THEME.ascent2_dark} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskInfo: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        flexDirection: 'column',
        marginBottom: 50
    },
    textInfoWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    textInfoTitle: {
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 14,
        lineHeight: 16
    },
    textInfoSubtitle: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMinimal_dark,
        fontSize: 14,
        lineHeight: 16
    },
    mainTaskWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
})