import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {THEME} from "../theme/theme";

export const Task = ({lineColor}) => {
    return (
        <View style={styles.taskWrapper}>
            <View style={{...styles.line, backgroundColor: lineColor}} />
            <View style={styles.mainContainer}>
                <View style={styles.taskHeader}>
                    <View style={{...styles.tag, backgroundColor: lineColor}}>
                        <Text style={styles.tagText}>Design</Text>
                    </View>
                    <View style={styles.team}>
                        <View style={{...styles.human, ...styles.odd}} />
                        <View style={{...styles.human, ...styles.even}} />
                        <View style={{...styles.human, ...styles.odd}} />
                        <View style={{...styles.human, ...styles.even}} />
                        <Text style={styles.morePeople}>+4</Text>
                    </View>
                </View>
                <Text style={styles.taskTitle}>Design UI</Text>
                <Text style={styles.taskDescription}>Make ui designs for travel needs with the following goals...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height: '100%',
        zIndex: 10,
        width: 6,
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6,
        position: 'absolute'
    },
    taskWrapper: {
        position: 'relative',
        flexDirection: 'row',
        width: 220,
        marginRight: 18
    },
    mainContainer: {
        position: 'relative',
        width: '100%',
        backgroundColor: THEME.componentBcg_dark,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6,
        flexDirection: 'column',
        paddingRight: 10,
        paddingLeft: 18
    },
    taskHeader: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 12,
        justifyContent: 'space-between'
    },
    tag: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16.5
    },
    tagText: {
        fontFamily: 'Rubik-Medium',
        color: '#fff',
        fontSize: 12,
        lineHeight: 14
    },
    taskTitle: {
        marginBottom: 6,
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontSize: 16,
        lineHeight: 19
    },
    taskDescription: {
        height: 34,
        marginBottom: 16,
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 12,
        lineHeight: 18
    },
    team: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    human: {
        width: 24,
        height: 24,
        borderRadius: 50,
        marginRight: -6
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
        fontSize: 12,
        lineHeight: 14,
        marginLeft: 10
    }
})