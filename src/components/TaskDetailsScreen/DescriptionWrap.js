import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {THEME} from "../../theme/theme";

export const DescriptionWrap = () => {
    return (
        <View>
            <Text style={styles.mainText}>Travel UI Design Kits</Text>
            <Text style={styles.secondaryText}>
                Make ui designs for travel needs with the following goals
                listed below, and in a layout style that matches the research data
                and design inspiration that has been collected.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        fontFamily: "Rubik-Medium",
        fontSize: 28,
        lineHeight: 33,
        color: THEME.textMain_dark,
        paddingBottom: "3%"
    },
    secondaryText: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        lineHeight: 24,
        color: THEME.textSecondary_dark,
        paddingBottom: "10%"
    },
})