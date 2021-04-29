import React from "react";
import {StyleSheet, View, TextInput} from 'react-native'
import {THEME} from "../../theme/theme";

export const TitleAndDesc = () => {
    return (
        <View style={styles.titleAndDesc}>
            <TextInput
                style={{...styles.input, ...styles.titleInput}}
                placeholder='Title Task...'
                placeholderTextColor={THEME.textHelping_dark}
            />
            <TextInput
                style={{...styles.input, ...styles.descInput}}
                placeholder='Description...'
                placeholderTextColor={THEME.textHelping_dark}
                multiline = {true}
                numberOfLines = {4}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: '23.08%'
    },
    titleAndDesc: {
        flexDirection: 'column',
        paddingHorizontal: 24,
        marginBottom: 42
    },
    input: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 26,
        backgroundColor: THEME.componentBcg_dark,
        borderRadius: 16,
        color: THEME.textSecondary_dark,
        fontFamily: 'Rubik-Regular'
    },
    titleInput: {
        marginBottom: 16
    },
    descInput: {
        textAlignVertical: 'top'
    },
})