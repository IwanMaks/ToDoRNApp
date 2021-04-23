import React from "react";
import {Text, StyleSheet} from "react-native";
import {THEME} from "../theme/theme";

export const AppTitle = ({text, style}) => {
    return (
        <Text style={{...styles.title, ...style}}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    }
})