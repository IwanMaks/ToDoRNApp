import React from "react";
import {ScrollView, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {AppInput} from "../ui/AppInput";
import {AppHeader} from "../ui/AppHeader";
import {DateContainer} from "../components/ActivityScreen/DateContainer";
import {ActionContainer} from "../components/ActivityScreen/ActionContainer";

// TODO: Передавать в DateContainer нынешнюю дату и даты для календаря
// TODO: Передавать в ActionContainer информацию о всех событиях

export const ActivityScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <AppHeader navigation={navigation} headerText='Activity' styleWrap={{paddingHorizontal: 24}} />
            <AppInput styleWrap={{width: '84.67%', marginBottom: 32, paddingHorizontal: 24}} styleInput={{width: '100%'}} />
            <DateContainer />
            <ActionContainer />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    }
})