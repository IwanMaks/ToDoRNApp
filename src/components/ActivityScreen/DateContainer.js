import React from "react";
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import {DateCard} from "../../ui/DateCard";
import {THEME} from "../../theme/theme";

export const DateContainer = () => {
    return (
        <>
        <View style={styles.mainDate}>
            <Text style={styles.headerDate}>October 22, 2020</Text>
            <Text style={styles.headerToday}>Today</Text>
        </View>
        <ScrollView style={styles.dateContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
            <DateCard day={18} week='Sun'/>
            <DateCard day={19} week='Mon'/>
            <DateCard day={20} week='Tue'/>
            <DateCard isActive={true} />
            <DateCard day={22} week='Thu'/>
            <DateCard day={23} week='Fri'/>
            <DateCard day={24} week='Sat'/>
            <DateCard day={25} week='Sun'/>
            <DateCard day={26} week='Mon'/>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    mainDate: {
        flexDirection: 'column',
        marginBottom: 24,
        paddingHorizontal: 24,
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
    dateContainer: {
        flexDirection: 'row',
        marginBottom: 32
    },
})