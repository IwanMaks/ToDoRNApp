import React from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {THEME} from "../../theme/theme";

export const AddTaskButton = () => {
    return (
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
            <Text style={{...styles.buttonTitle, fontSize: 16, lineHeight: 19}}>+ Add Task</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton: {
        paddingVertical: 16,
        backgroundColor: THEME.ascent2_dark,
        borderRadius: 10,
        marginHorizontal: 24,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonTitle: {
        fontFamily: 'Rubik-Medium',
        color: '#fff',
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17
    },
})