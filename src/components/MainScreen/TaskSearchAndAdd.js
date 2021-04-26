import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {THEME} from "../../theme/theme";
import {AppInput} from "../../ui/AppInput";
import {AddIcon} from "../../ui/icons/AddIcon";

export const TaskSearchAndInfo = ({navigation}) => {
    return (
        <View style={styles.inputContainer}>
            <AppInput />
            <TouchableOpacity style={{...styles.searchIcon, ...styles.add}} activeOpacity={0.7} onPress={() => navigation.navigate('NewTask')}>
                <AddIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    searchIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14
    },
    add: {
        backgroundColor: THEME.ascent2_dark
    },
})