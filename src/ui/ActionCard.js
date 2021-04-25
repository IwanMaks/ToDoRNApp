import React from "react";
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import {THEME} from "../theme/theme";

export const ActionCard = ({userName, time, text}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <View style={styles.avatar}/>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <Text style={styles.time}>{time}</Text>
            </View>
            <Text style={styles.textAction}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: THEME.componentBcg_dark,
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginBottom: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: THEME.textSecondary_dark,
        marginRight: 9
    },
    userName: {
        fontFamily: 'Rubik-Medium',
        fontSize: 18,
        lineHeight: 21,
        color: THEME.textMain_dark
    },
    time: {
        fontFamily: 'Rubik-Regular',
        fontSize: 13,
        lineHeight: 15,
        color: THEME.textSecondary_dark
    },
    textAction: {
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: THEME.textSecondary_dark
    }
})