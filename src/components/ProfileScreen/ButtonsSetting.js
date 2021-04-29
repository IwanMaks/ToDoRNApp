import React from "react";
import {StyleSheet, View} from 'react-native'
import {AppSwitch} from "../../ui/AppSwitch";

export const ButtonsSetting = (props) => {
    return (
        <View style={styles.buttonsGroup}>
            <AppSwitch type='reminders' />
            <AppSwitch type='notification' />
            <AppSwitch type='help' />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsGroup: {
        marginTop: 32,
        marginHorizontal: 24
    }
})