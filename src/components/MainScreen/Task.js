import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {THEME} from "../../theme/theme";

export const Task = ({lineColor, navigation, tagTitle = 'Design', taskTitle = 'Design UI', taskDescription = 'Make ui designs for travel needs with the following goals...' }) => {

    return (
        <TouchableOpacity style={styles.taskWrapper} onPress={() => navigation.navigate('TaskDetails')} activeOpacity={0.7}>
            <View style={{...styles.line, backgroundColor: lineColor}} />
            <View style={styles.mainContainer}>
                <View style={styles.taskHeader}>
                    <View style={{...styles.tag, backgroundColor: lineColor}}>
                        <Text style={styles.tagText}>{tagTitle}</Text>
                    </View>
                    <View style={styles.team}>
                        <View style={{...styles.human, ...styles.odd}} />
                        <View style={{...styles.human, ...styles.even}} />
                        <View style={{...styles.human, ...styles.odd}} />
                        <View style={{...styles.human, ...styles.even}} />
                        <Text style={styles.morePeople}>+4</Text>
                    </View>
                </View>
                <Text style={styles.taskTitle}>{taskTitle}</Text>
                <Text numberOfLines={2} style={styles.taskDescription}>{taskDescription}</Text>
            </View>
        </TouchableOpacity>
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
        marginLeft: 24
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