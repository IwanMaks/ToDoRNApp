import React from "react";
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {BackIcon} from "../../ui/icons/BackIcon";
import {THEME} from "../../theme/theme";
import {DateCard} from "../../ui/DateCard";

export const CalendarList = () => {
    return (
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
    )
}

const styles = StyleSheet.create({
    calendarList: {
        marginBottom: 32,
    },
    toggleMonth: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingHorizontal: 24
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
        paddingHorizontal: 0,
    },
})