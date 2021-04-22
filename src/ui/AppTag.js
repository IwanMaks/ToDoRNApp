import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {THEME} from "../theme/theme";

export const AppTag = ({tagName = 'Design', color = THEME.label1_dark}) => {
    return (
        <View style={{...styles.tag, backgroundColor: color}}>
            <Text style={styles.tagValue}>{tagName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 16.5,
        marginRight: 8
    },
    tagValue: {
        fontFamily: 'Rubik-Medium',
        color: '#fff',
        fontSize: 14,
        lineHeight: 17
    }
})