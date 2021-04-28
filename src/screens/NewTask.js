import React from "react";
import {ScrollView, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {AppHeader} from "../ui/AppHeader";
import {TitleAndDesc} from "../components/NewTaskScreen/TitleAndDesc";
import {CalendarWrap} from "../components/NewTaskScreen/Calendar";
import {TagsWrap} from "../components/NewTaskScreen/TagsWrap";
import {TeamBlock} from "../components/NewTaskScreen/TeamBlock";
import {GoalsWrap} from "../components/NewTaskScreen/GoalsWrap";
import {AddTaskButton} from "../components/NewTaskScreen/AddTaskButton";

// TODO: Передавать в CalendarWrap информацию о дедлайнах задания
// TODO: Сделать теги кликабельными (TagsWrap)
// TODO: Сделать popup для добавления нового элемента

export const NewTask = ({navigation}) => {
    return (
        <ScrollView style={styles.mainWrap}>
            <AppHeader navigation={navigation} headerText='New Task' styleWrap={{paddingHorizontal: 24}} />
            <TitleAndDesc />
            <CalendarWrap />
            <TagsWrap />
            <TeamBlock />
            <GoalsWrap />
            <AddTaskButton />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    }
})