import React from "react";
import {ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {THEME} from "../theme/theme";
import {BackButton} from "../ui/BackButton";
import {AppTitle} from "../ui/AppTitle";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Tags} from "../components/MainScreen/Tags";
import {TagIcon} from "../ui/icons/TagIcon";
import {AppTag} from "../ui/AppTag";

export const NewTask = ({navigation}) => {
    return (
        <ScrollView style={styles.mainWrap}>
            <View style={styles.header}>
                <BackButton navigation={navigation} />
                <AppTitle text='New Task' style={styles.title} />
            </View>
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
            <View style={styles.tags}>
                <View style={styles.headerWrap}>
                    <AppTitle text='Choose Tag' />
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrap}>
                        <Text style={styles.buttonTitle}>+ New tag</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tagsContainer}>
                    <TagIcon style={{marginRight: 13.5}} />
                    <ScrollView style={styles.tagsWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <AppTag />
                        <AppTag tagName='Development' color={THEME.label2_dark} />
                        <AppTag tagName='Testing' color={THEME.label3_dark} />
                        <AppTag tagName='Vector' color={THEME.label4_dark} />
                        <AppTag tagName='Vector' color={THEME.label4_dark} />
                        <AppTag tagName='Vector' color={THEME.label4_dark} />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.teamBlock}>
                <View style={styles.headerWrap}>
                    <AppTitle text='Select Team' />
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrap}>
                        <Text style={styles.buttonTitle}>+ New member</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.teamWrap}>
                    <View style={{...styles.human, ...styles.odd}} />
                    <View style={{...styles.human, ...styles.even}} />
                    <View style={{...styles.human, ...styles.odd}} />
                    <View style={{...styles.human, ...styles.even}} />
                    <View style={{...styles.human, ...styles.odd}} />
                </View>
            </View>
            <View style={styles.goalsBlock}>
                <View style={{...styles.headerWrap, marginBottom: 0}}>
                    <AppTitle text='Goals Task' />
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrap}>
                        <Text style={styles.buttonTitle}>+ New goals</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.goalsList}>
                    <View style={styles.goal}>
                        <Text style={styles.goalTitle}>Digitize a sketch made on paper</Text>
                        <View style={styles.hr} />
                    </View>
                    <View style={styles.goal}>
                        <Text style={styles.goalTitle}>Digitize a sketch made on paper</Text>
                        <View style={styles.hr} />
                    </View>
                    <View style={styles.goal}>
                        <Text style={styles.goalTitle}>Digitize a sketch made on paper</Text>
                        <View style={styles.hr} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
                <Text style={{...styles.buttonTitle, fontSize: 16, lineHeight: 19}}>+ Add Task</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    },
    header: {
        marginVertical: 42,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 24,
    },
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
    tags: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'column',
        marginBottom: 42
    },
    headerWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 19
    },
    tagsTitle: {
        marginBottom: 24,
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tagsWrapper: {
        flexDirection: 'row',
    },
    buttonWrap: {
        padding: 10,
        backgroundColor: THEME.ascent2_dark,
        borderRadius: 6
    },
    buttonTitle: {
        fontFamily: 'Rubik-Medium',
        color: '#fff',
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17
    },
    teamBlock: {
        flexDirection: "column",
        width: "100%",
        paddingBottom: "8%",
        paddingHorizontal: 24
    },
    teamWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
    },
    human: {
        width: 64,
        height: 64,
        borderRadius: 128,
        marginRight: -16
    },
    even: {
        backgroundColor: "#DEDEDE"
    },
    odd: {
        backgroundColor: "#c4c4c4"
    },
    goalsBlock: {
        paddingHorizontal: 24,
        marginBottom: 32
    },
    goalsList: {

    },
    goal: {

    },
    goalTitle: {
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 16,
        lineHeight: 19,
        paddingVertical: 20
    },
    hr: {
        height: 2,
        width: "100%",
        backgroundColor: THEME.textMinimal_dark,
        borderRadius: 2
    },
    addButton: {
        paddingVertical: 16,
        backgroundColor: THEME.ascent2_dark,
        borderRadius: 10,
        marginHorizontal: 24,
        alignItems: 'center',
        marginBottom: 20
    }
})