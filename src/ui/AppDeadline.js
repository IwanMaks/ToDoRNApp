import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import {THEME} from "../theme/theme";

export const AppDeadline = ({text = 'Today', style = {}}) => {
    return (
        <Text style={{...styles.text, ...style}}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Rubik-Medium',
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 21,
        marginRight: 25
    }
})