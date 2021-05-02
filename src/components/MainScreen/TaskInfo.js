import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {THEME} from "../../theme/theme";
import {TaskCard} from "../../ui/TaskCard";
import {useSelector} from "react-redux";

export const TaskInfo = () => {
    const allTasks = useSelector(state => state.tasks.tasks)
    const tasksObj = sortTasks(allTasks)

    return (
        <View style={styles.taskInfo}>
            <View style={styles.textInfoWrapper}>
                <Text style={styles.textInfoTitle}>Have total </Text>
                <Text style={styles.textInfoSubtitle}>{tasksObj.total} Task</Text>
            </View>
            <View style={styles.mainTaskWrapper}>
                <TaskCard title='Pending' count={tasksObj.pending} color={THEME.ascent4_dark} />
                <TaskCard title='Done' count={tasksObj.done} color={THEME.ascent1_dark} />
                <TaskCard title='To Do' count={tasksObj.todo} color={THEME.ascent2_dark} />
            </View>
        </View>
    )
}

const sortTasks = (tasks) => {
    const total = tasks.length
    let pending = 0
    let done = 0
    let todo = 0

    tasks.forEach(item => {
        if (item.status === 'To Do') {
            todo++
        } else if (item.status === 'Done') {
            done++
        } else if (item.status === 'Pending') {
            pending++
        }
    })
    return {
        total,
        pending,
        done,
        todo
    }
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