import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {THEME} from "../../theme/theme";

export const DetailsTeamBlock = () => {
    return (
        <View style={styles.teamBlock}>
            <Text style={styles.heading}>Our team</Text>
            <View style={styles.teamWrap}>
                <View style={{...styles.human, ...styles.odd}} />
                <View style={{...styles.human, ...styles.even}} />
                <View style={{...styles.human, ...styles.odd}} />
                <View style={{...styles.human, ...styles.even}} />
                <View style={{...styles.human, ...styles.odd}} />
                <Text style={styles.morePeople}>+4</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teamBlock: {
        flexDirection: "column",
        width: "100%",
        paddingBottom: "8%",
    },
    teamWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingTop: "6%",
    },
    human: {
        width: 64,
        height: 64,
        borderRadius: 128,
        marginRight: -16
    },
    even: {
        backgroundColor: "#DEDEDE"
    },
    odd: {
        backgroundColor: "#c4c4c4"
    },
    morePeople: {
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 18,
        lineHeight: 32,
        marginLeft: 32
    },
    heading: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
})