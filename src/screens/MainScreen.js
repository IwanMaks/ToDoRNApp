import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import {THEME} from "../theme/theme";
import {StatusBar} from "expo-status-bar";
import {ActivityIcon} from "../ui/icons/ActivityIcon";
import {ScheduleIcon} from "../ui/icons/ScheduleIcon";

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
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: THEME.base_dark
    },
    header: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        width: '100%',
        paddingTop: 48,
        paddingHorizontal: 24,
        justifyContent: 'space-between'
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
    }
})