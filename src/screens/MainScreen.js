import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {THEME} from "../theme/theme";
import {StatusBar} from "expo-status-bar";
import {ActivityIcon} from "../ui/icons/ActivityIcon";
import {ScheduleIcon} from "../ui/icons/ScheduleIcon";
import {AppInput} from "../ui/AppInput";
import {AddIcon} from "../ui/icons/AddIcon";
import {TaskCard} from "../ui/TaskCard";
import {TagIcon} from "../ui/icons/TagIcon";
import {AppTag} from "../ui/AppTag";
import {AppDeadline} from "../ui/AppDeadline";
import {Task} from "../components/Task";

export const MainScreen = (props) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar style='light'/>
            <View style={styles.header}>
                <View style={styles.mainDate}>
                    <Text style={styles.headerDate}>October 22, 2020</Text>
                    <Text style={styles.headerToday}>Today</Text>
                </View>
                <View style={styles.headerIconContainer}>
                    <TouchableOpacity style={{...styles.headerIcon, ...styles.activity}} activeOpacity={0.7}>
                        <ActivityIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.headerIcon, ...styles.schedules}} activeOpacity={0.7}>
                        <ScheduleIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.headerIcon, ...styles.profile}} activeOpacity={0.7}>
                        <Image source={require('../../assets/icons/profile.png')} style={{width: 26, height: 26}} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <AppInput />
                <TouchableOpacity style={{...styles.searchIcon, ...styles.add}} activeOpacity={0.7}>
                    <AddIcon />
                </TouchableOpacity>
            </View>
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
            <View style={styles.tags}>
                <Text style={styles.tagsTitle}>Tag Task</Text>
                <View style={styles.tagsContainer}>
                    <TagIcon style={{marginRight: 13.5}} />
                    <ScrollView style={styles.tagsWrapper} horizontal={true}>
                        <AppTag />
                        <AppTag tagName='Development' color={THEME.label2_dark} />
                        <AppTag tagName='Testing' color={THEME.label3_dark} />
                        <AppTag tagName='Vector' color={THEME.label4_dark} />
                        <AppTag tagName='Vector' color={THEME.label4_dark} />
                        <AppTag tagName='Vector' color={THEME.label4_dark} />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.tasksList}>
                <Text style={styles.tasksTitle}>My Task</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: THEME.base_dark,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 48,
        justifyContent: 'space-between',
        marginBottom: 42
    },
    mainDate: {
        flexDirection: 'column',
    },
    headerDate: {
        color: THEME.textSecondary_dark,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Rubik-Regular'
    },
    headerToday: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    headerIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerIcon: {
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginLeft: 12
    },
    activity: {
        backgroundColor: THEME.ascent1_dark
    },
    schedules: {
        backgroundColor: THEME.ascent2_dark
    },
    profile: {
        backgroundColor: THEME.ascent3_dark
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    searchIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14
    },
    add: {
        backgroundColor: THEME.ascent2_dark
    },
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
    tags: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'column',
        marginBottom: 42
    },
    tagsTitle: {
        marginBottom: 24,
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tagsWrapper: {
        flexDirection: 'row',
    },
    tasksList: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 24,
        alignItems: 'flex-start'
    },
    tasksTitle: {
        marginBottom: 24,
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    deadlines: {
        flexDirection: 'row',
        marginBottom: 24
    },
    tasks: {
        flexDirection: 'row'
    }

})