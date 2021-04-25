import React from "react";
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {SearchIcon} from "./icons/SearchIcon";
import {THEME} from "../theme/theme";

export const AppInput = ({placeholder = 'Find Task...', styleWrap = {}, styleInput = {}}) => {
    return (
        <View style={{...styles.inputContainer, ...styleWrap}}>
            <TouchableOpacity style={styles.inputIcon} activeOpacity={0.7}>
                <SearchIcon />
            </TouchableOpacity>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={THEME.textHelping_dark}
                style={{...styles.input, ...styleInput}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70.67%',
    },
    input: {
        height: 73,
        paddingVertical: 26,
        paddingRight: 10,
        width: '86.2%',
        backgroundColor: THEME.componentBcg_dark,
        borderBottomRightRadius: 16,
        borderTopRightRadius: 16,
        color: THEME.textSecondary_dark
    },
    inputIcon: {
        height: 73,
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 15,
        backgroundColor: THEME.componentBcg_dark,
        borderBottomLeftRadius: 16,
        borderTopLeftRadius: 16,
    }
})