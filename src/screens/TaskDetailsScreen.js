import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {THEME} from "../theme/theme";
import {AppHeader} from "../ui/AppHeader";
import {Tags} from "../components/MainScreen/Tags";
import {DescriptionWrap} from "../components/TaskDetailsScreen/DescriptionWrap";
import {TimeWrap} from "../components/TaskDetailsScreen/TimeWrap";
import {DetailsTeamBlock} from "../components/TaskDetailsScreen/DetailsTeamBlock";
import {DetailsGoalsWrap} from "../components/TaskDetailsScreen/DetailsGoalsWrap";
import {BottomButtonsWrap} from "../components/TaskDetailsScreen/BottomButtonsWrap";


export const TaskDetailsScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "transparent", zIndex: 0}}>
            <ScrollView style={styles.mainWrapper}>
                <AppHeader navigation={navigation} headerText='Detail Task' />
                <Tags title={false} style={{marginBottom: 16}} />
                <DescriptionWrap />
                <TimeWrap />
                <DetailsTeamBlock />
                <DetailsGoalsWrap />
            </ScrollView>
            <BottomButtonsWrap navigation={navigation} />
        </View>
    )
}


const styles = StyleSheet.create({
    mainWrapper: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        backgroundColor: THEME.base_dark,
        paddingHorizontal: "5%",
        zIndex: 2
    }
})