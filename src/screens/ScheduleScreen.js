import React from "react";
import {ScrollView, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {AppHeader} from "../ui/AppHeader";
import {CalendarList} from "../components/ScheduleScreen/CalendarList";
import {SearchContainer} from "../components/ScheduleScreen/SearchContainer";
import {ScheduleList} from "../components/ScheduleScreen/ScheduleList";

// TODO: Передавать в CalendarList информацию о нынешней дате и запланированные мероприятия
// TODO: Передавать в ScheduleList информацию о запланированных мероприятиях

export const ScheduleScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <AppHeader navigation={navigation} headerText='Schedule' styleWrap={{paddingHorizontal: 24}} />
            <CalendarList />
            <SearchContainer />
            <ScheduleList />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    }
})