import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {AppTasksList} from "../../ui/AppTasksList";
import {THEME} from "../../theme/theme";
import {useSelector} from "react-redux";

export const TasksContainer = ({navigation}) => {
    const tasks = useSelector(state => state.tasks.tasks);

    const setTasksTotal = (tasks) => {
        const tasksAmount = tasks.length;
        let taskWord = '';

        if (tasksAmount > 1) {
            taskWord = 'tasks'
        } else {
            taskWord = 'task'
        }

        return (tasksAmount + ' ' + taskWord );
    }

    return (
        <>
            <View style={styles.tasksContainer}>
                <View style={styles.textAndLinkWrap}>
                    <View style={styles.textWrap}>
                        <Text style={styles.mainText}>You have total </Text>
                        <Text style={styles.subText}>{setTasksTotal(tasks)}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.linkText}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <AppTasksList navigation={navigation} />
        </>
    )
}

const styles = StyleSheet.create({
    tasksContainer: {
        marginHorizontal: 24,
        marginTop: 4,
        marginBottom: 16
    },
    textAndLinkWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textWrap: {
        flexDirection: 'row'
    },
    mainText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: THEME.textSecondary_dark,
    },
    subText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: THEME.textMinimal_dark,
    },
    linkText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 18,
        lineHeight: 21,
        color: THEME.textSecondary_dark,
    },
})