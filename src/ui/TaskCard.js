import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {THEME} from "../theme/theme";

export const TaskCard = ({title, count, color}) => {
    return (
        <View style={styles.cardWrapper}>
            <View style={styles.mainContainer}>
                <View style={{...styles.line, backgroundColor: color}} />
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardValue}>{count} task</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        width: '30.91%',
    },
    line: {
        height: '100%',
        width: 6,
        borderRadius: 2,
        position: 'absolute'
    },
    mainContainer: {
        position: 'relative',
        width: '100%',
        backgroundColor: THEME.componentBcg_dark,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2,
    },
    cardTitle: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontSize: 18,
        lineHeight: 21,
        paddingLeft: 16,
        marginTop: 8,
        marginBottom: 6
    },
    cardValue: {
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 16,
        lineHeight: 19,
        paddingLeft: 16,
        marginBottom: 8
    }
})
