import React from "react";
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {THEME} from "../theme/theme";

export const DateCard = ({isActive = false, day = 21, week = 'Wed'}) => {
    const activeStyleWrap = isActive ? styles.containerActive : {}
    const activeStyleText = isActive ? styles.textActive : {}
    return (
        <TouchableOpacity style={{...styles.container, ...activeStyleWrap}} activeOpacity={0.7}>
            <Text style={{...styles.date, ...activeStyleText}}>{day}</Text>
            <Text style={{...styles.weekday, ...activeStyleText}}>{week}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 57,
        height: 74,
        borderRadius: 12,
        backgroundColor: THEME.componentBcg_dark,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12
    },
    containerActive: {
        backgroundColor: THEME.ascent2_dark
    },
    textActive: {
        color: 'white'
    },
    date: {
        fontFamily: 'Rubik-Medium',
        fontSize: 20,
        lineHeight: 24,
        color: THEME.textSecondary_dark
    },
    weekday: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        lineHeight: 17,
        color: THEME.textSecondary_dark
    }
})