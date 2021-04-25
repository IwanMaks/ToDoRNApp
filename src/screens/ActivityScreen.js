import React from "react";
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import {BackButton} from "../ui/BackButton";
import {AppTitle} from "../ui/AppTitle";
import {THEME} from "../theme/theme";
import {AppInput} from "../ui/AppInput";
import {DateCard} from "../ui/DateCard";
import {ActionCard} from "../ui/ActionCard";

export const ActivityScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.header}>
                <BackButton navigation={navigation} />
                <AppTitle text='Activity' style={styles.title} />
            </View>
            <AppInput styleWrap={{width: '84.67%', marginBottom: 32, paddingHorizontal: 24}} styleInput={{width: '100%'}} />
            <View style={styles.mainDate}>
                <Text style={styles.headerDate}>October 22, 2020</Text>
                <Text style={styles.headerToday}>Today</Text>
            </View>
            <ScrollView style={styles.dateContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                <DateCard day={18} week='Sun'/>
                <DateCard day={19} week='Mon'/>
                <DateCard day={20} week='Tue'/>
                <DateCard isActive={true} />
                <DateCard day={22} week='Thu'/>
                <DateCard day={23} week='Fri'/>
                <DateCard day={24} week='Sat'/>
                <DateCard day={25} week='Sun'/>
                <DateCard day={26} week='Mon'/>
            </ScrollView>
            <View style={styles.actionContainer}>
                <ActionCard userName='Levi Smith' time='13:24' text='add the research.doc file and the https://ryanazhari.github.io link to the Travel Design UI Kits card task.' />
                <ActionCard userName='Albert Tino' time='15:45' text='Add resource.png and images.jpg file to the Travel Design UI Kits card task.'/>
                <ActionCard userName='Tanya Pena' time='10:12' text='Change the status card task of the Unicom Logo from worked on to  be done.'/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
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
    mainDate: {
        flexDirection: 'column',
        marginBottom: 24,
        paddingHorizontal: 24,
    },
    headerDate: {
        color: THEME.textSecondary_dark,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Rubik-Regular'
    },
    headerToday: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    dateContainer: {
        flexDirection: 'row',
        marginBottom: 32
    },
    actionContainer: {
        paddingHorizontal: 24,
    }
})