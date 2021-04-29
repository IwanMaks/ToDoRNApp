import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {AppTitle} from "../../ui/AppTitle";
import {THEME} from "../../theme/theme";
import {Calendar} from "react-native-calendars";

export const CalendarWrap = () => {
    return (
        <View style={styles.calendarWrap}>
            <AppTitle text='Set Deadline' style={{paddingHorizontal: 12, marginBottom: 23}} />
            <Calendar
                markingType={'period'}
                style={styles.calendar}
                markedDates={{
                    '2021-04-25': {startingDay: true, color: THEME.ascent2_dark, textColor: 'white'},
                    '2021-04-26': {color: THEME.componentBcg_dark, textColor: 'white'},
                    '2021-04-27': {color: THEME.componentBcg_dark, textColor: 'white'},
                    '2021-04-28': {color: THEME.componentBcg_dark, textColor: 'white'},
                    '2021-04-29': {endingDay: true, color: THEME.ascent2_dark, textColor: 'white'}
                }}
                theme={{
                    backgroundColor: THEME.ascent2_dark,
                    calendarBackground: THEME.base_dark,
                    arrowColor: '#B2B2BD',
                    textMonthFontFamily: 'Rubik-Medium',
                    monthTextColor: THEME.textMain_dark,
                    textMonthFontSize: 18,
                    todayTextColor: THEME.label2_dark,
                    dayTextColor: THEME.textMain_dark,
                    textDisabledColor: THEME.base_dark,
                    selectedDayBackgroundColor: THEME.ascent2_dark,
                    selectedDayTextColor: '#ffffff',
                    'stylesheet.calendar.header': {
                        week: {
                            backgroundColor: THEME.ascent2_dark,
                            marginTop: 5,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderRadius: 6,
                        },
                        dayHeader: {
                            color: '#fff',
                            marginTop: 15,
                            marginBottom: 15,
                            width: 32,
                            textAlign: 'center',
                            fontSize: 12,
                            fontFamily: 'Rubik-Medium'
                        }
                    }
                }}
            />
            <View style={styles.totalDays}>
                <Text style={styles.weHave}>We have </Text>
                <Text style={styles.daysCount}>6 days</Text>
            </View>
            <View style={styles.totalDays}>
                <Text style={styles.weHave}>October 23, 2020 - </Text>
                <Text style={styles.weHave}>October 28, 2020 </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    calendarWrap: {
        paddingHorizontal: 14,
        marginBottom: 36
    },
    calendar: {
        backgroundColor: THEME.base_dark,
        marginBottom: 24
    },
    totalDays: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 6
    },
    weHave: {
        color: THEME.textSecondary_dark,
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        lineHeight: 24,
    },
    daysCount: {
        color: THEME.textMain_dark,
        fontFamily: 'Rubik-Regular',
        fontSize: 14,
        lineHeight: 24,
    },
})