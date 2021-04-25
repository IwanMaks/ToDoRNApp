// import Checkbox from 'expo-checkbox';
import React, {useState} from "react";
import {ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {THEME} from "../theme/theme";

export const ScheduleCard = ({color, title, text, time}) => {
    const [done, setDone] = useState(false)
    const toggleCheck = () => setDone(previousState => !previousState)

    return (
        <TouchableOpacity style={styles.taskWrapper} activeOpacity={0.7}>
            <View style={{...styles.line, backgroundColor: color}} />
            <View style={styles.mainContainer}>
                <Text style={{...styles.scheduleTitle, color: color}}>{title}</Text>
                <Text style={{...styles.scheduleText}}>{text}</Text>
                <Text style={{...styles.scheduleTime, color: color}}>{time}</Text>
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
        width: '85%',
        alignItems: 'center',
        marginBottom: 16
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
        paddingRight: 16,
        paddingLeft: 18,
    },
    scheduleTitle: {
        color: THEME.label2_dark,
        fontFamily: 'Rubik-Regular',
        fontSize: 12,
        lineHeight: 18,
        marginTop: 16,
        marginBottom: 6
    },
    scheduleText: {
        color: THEME.textSecondary_dark,
        fontFamily: 'Rubik-Medium',
        fontSize: 14,
        lineHeight: 20
    },
    scheduleTime: {
        color: THEME.label1_dark,
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        lineHeight: 18,
        marginTop: 8,
        marginBottom: 20
    }
})