import React from "react";
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {BackButton} from "../ui/BackButton";
import {AppTitle} from "../ui/AppTitle";
import {THEME} from "../theme/theme";
import {BackIcon} from "../ui/icons/BackIcon";
import {DateCard} from "../ui/DateCard";
import {AppInput} from "../ui/AppInput";
import {FilterIcon} from "../ui/icons/FilterIcon";
import {ScheduleCard} from "../ui/ScheduleCard";

export const ScheduleScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.header}>
                <BackButton navigation={navigation} />
                <AppTitle text='Schedule' style={styles.title} />
            </View>
            <View style={styles.calendarList}>
                <View style={styles.toggleMonth}>
                    <TouchableOpacity style={styles.toggleButton} activeOpacity={0.7}>
                        <BackIcon width={4} height={8} color={THEME.textMain_dark} />
                    </TouchableOpacity>
                    <Text style={styles.month}>October 2020</Text>
                    <TouchableOpacity style={{...styles.toggleButton, transform: [{ rotate: '-180deg' }]}} activeOpacity={0.7}>
                        <BackIcon width={4} height={8} color={THEME.textMain_dark} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.dateContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <DateCard isActive={true} day={18} week='Sun'/>
                    <DateCard day={19} week='Mon'/>
                    <DateCard day={20} week='Tue'/>
                    <DateCard />
                    <DateCard day={22} week='Thu'/>
                    <DateCard day={23} week='Fri'/>
                    <DateCard day={24} week='Sat'/>
                </ScrollView>
            </View>
            <View style={styles.searchContainer}>
                <AppInput placeholder='Find Schedule...' />
                <TouchableOpacity activeOpacity={0.7}>
                    <FilterIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.scheduleList}>
                <ScheduleCard
                    color={THEME.label1_dark}
                    title='PRESENTATION'
                    text='Presentation of the Travel UI Design Kits project to Mr. Eren Inaho.'
                    time='10:00 am - 11:25 am'
                />
                <ScheduleCard
                    color={THEME.ascent4_dark}
                    title='MEETINGS'
                    text='Discuss plans for a resolution of recruiting new staff.'
                    time='13:00 pm - 14:00 pm'
                />
                <ScheduleCard
                    color={THEME.label3_dark}
                    title='INTERVIEW'
                    text='An interview to recruit a freelance worker in the icon designer.'
                    time='15:30 pm - 14:00 pm'
                />
                <ScheduleCard
                    color={THEME.label2_dark}
                    title='MEETINGS'
                    text='Discuss plans for a resolution of recruiting new staff.'
                    time='13:00 pm - 14:00 pm'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    },
    header: {
        marginVertical: 42,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 24,
    },
    title: {
        marginLeft: '23.08%'
    },
    calendarList: {
        marginBottom: 32
    },
    toggleMonth: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    toggleButton: {
        backgroundColor: THEME.componentBcg_dark,
        width: 26,
        height: 26,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    month: {
        fontFamily: 'Rubik-Medium',
        fontSize: 18,
        lineHeight: 21,
        color: THEME.textSecondary_dark
    },
    dateContainer: {
        flexDirection: 'row',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginBottom: 32
    },
    scheduleList: {
        paddingHorizontal: 24,
    }
})