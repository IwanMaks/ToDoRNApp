import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import {THEME} from "../../theme/theme";
import {ActivityIcon} from "../../ui/icons/ActivityIcon";
import {ScheduleIcon} from "../../ui/icons/ScheduleIcon";

export const Header = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={styles.mainDate}>
                <Text style={styles.headerDate}>October 22, 2020</Text>
                <Text style={styles.headerToday}>Today</Text>
            </View>
            <View style={styles.headerIconContainer}>
                <TouchableOpacity style={{...styles.headerIcon, ...styles.activity}} activeOpacity={0.7} onPress={() => navigation.navigate('Activity')}>
                    <ActivityIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.headerIcon, ...styles.schedules}} activeOpacity={0.7}>
                    <ScheduleIcon />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.headerIcon, ...styles.profile}} activeOpacity={0.7} onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../../../assets/icons/profile.png')} style={{width: 26, height: 26}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})