import React from "react";
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {BackIcon} from "./icons/BackIcon";
import {THEME} from "../theme/theme";

export const BackButton = ({navigation}) => {

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backWrapper}  activeOpacity={0.7}>
            <BackIcon />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backWrapper: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: THEME.ascent2_dark,
        justifyContent: 'center',
        alignItems: 'center'
    }
})