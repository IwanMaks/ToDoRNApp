import React from "react";
import {StyleSheet, View} from 'react-native'
import {ScheduleCard} from "../../ui/ScheduleCard";
import {THEME} from "../../theme/theme";

export const ScheduleList = () => {
    return (
        <View style={styles.scheduleList}>
            <ScheduleCard
                color={THEME.label1_dark}
                title='PRESENTATION'
                text='Presentation of the Travel UI Design Kits project to Mr. Eren Inaho.'
                time='10:00 am - 11:25 am'
            />
            <ScheduleCard
                color={THEME.ascent4_dark}
                title='MEETINGS'
                text='Discuss plans for a resolution of recruiting new staff.'
                time='13:00 pm - 14:00 pm'
            />
            <ScheduleCard
                color={THEME.label3_dark}
                title='INTERVIEW'
                text='An interview to recruit a freelance worker in the icon designer.'
                time='15:30 pm - 14:00 pm'
            />
            <ScheduleCard
                color={THEME.label2_dark}
                title='MEETINGS'
                text='Discuss plans for a resolution of recruiting new staff.'
                time='13:00 pm - 14:00 pm'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    scheduleList: {
        paddingHorizontal: 24
    }
})