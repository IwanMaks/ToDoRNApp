import React, {useState} from "react";
import {View, Switch, Text, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {ReminderIcon} from "./icons/ReminderIcon";
import {NotifIcon} from "./icons/NotifIcon";
import {HelpIcon} from "./icons/HelpIcon";

const types = {
    'reminders': [<ReminderIcon />,'Reminders'],
    'notification': [<NotifIcon />, 'Notification'],
    'help': [<HelpIcon />, 'Help & Support']
}

export const AppSwitch = ({type, init = false}) => {
    const [on, setOn] = useState(init)
    const toggleSwitch = () => setOn(previousState => !previousState)

    return (
        <View style={{...styles.switchWrap, backgroundColor: on ? THEME.componentBcg_dark : 'transparent'}}>
            <View style={styles.iconWrap}>
                {types[type][0]}
                <Text style={styles.title}>{types[type][1]}</Text>
            </View>
            <Switch value={Boolean(on)} onValueChange={toggleSwitch} />
        </View>
    )
}

const styles = StyleSheet.create({
    switchWrap: {
        width: '100%',
        height: 69,
        borderRadius: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    iconWrap: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
        marginLeft: 16,
        color: THEME.textMain_dark,
        fontFamily: 'Rubik-Medium',
        fontSize: 18,
        lineHeight: 21,
    }
})