import React from "react";
import {ScrollView, StyleSheet} from 'react-native';
import {THEME} from "../theme/theme";
import {ProfileHeader} from "../components/ProfileScreen/ProfileHeader";
import {ProfileAvatar} from "../components/ProfileScreen/ProfileAvatar";
import {TasksContainer} from "../components/ProfileScreen/TasksContainer";
import {ButtonsSetting} from "../components/ProfileScreen/ButtonsSetting";

// TODO: Передавать в ProfileAvatar информацию о пользователе
// TODO: Передавать в TasksContainer информацию о всех заданиях пользователя

export const ProfileScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <ProfileHeader navigation={navigation} />
            <ProfileAvatar />
            <TasksContainer navigation={navigation} />
            <ButtonsSetting />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    }
})