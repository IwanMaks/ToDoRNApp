import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {THEME} from "../../theme/theme";
import {Goal} from "./Goal";

export const DetailsGoalsWrap = () => {

    return (
        <View style={styles.goalsWrap}>
            <Text style={styles.heading}>Task goals</Text>
            <View style={styles.goals}>
                <Goal />
                <Goal />
                <Goal />
                <Goal />
                <Goal />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    goalsWrap: {
        flexDirection: "column",
        width: "100%",
        paddingBottom: "25%",
    },
    goals: {
        paddingTop: "6%",
        alignItems: "flex-end"
    },
    heading: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
})