import React from "react";
import {StyleSheet, View} from 'react-native'
import {AppSwitch} from "../../ui/AppSwitch";
import {useSelector} from "react-redux";

export const ButtonsSetting = (props) => {
    const user = useSelector(state => state.tasks.user);

    return (
        <View style={styles.buttonsGroup}>
            <AppSwitch type='reminders' init={user.settings.reminders}/>
            <AppSwitch type='notification' init={user.settings.notification}/>
            <AppSwitch type='help' init={user.settings.help}/>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsGroup: {
        marginTop: 32,
        marginHorizontal: 24
    }
})