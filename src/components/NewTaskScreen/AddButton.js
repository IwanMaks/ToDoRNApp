import React from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {THEME} from "../../theme/theme";

export const AddButton = ({buttonTitle}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrap}>
            <Text style={styles.buttonTitle}>+ {buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrap: {
        padding: 10,
        backgroundColor: THEME.ascent2_dark,
        borderRadius: 6
    },
    buttonTitle: {
        fontFamily: 'Rubik-Medium',
        color: '#fff',
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17
    },
})