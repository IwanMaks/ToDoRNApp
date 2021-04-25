import React from "react";
import {ScrollView, View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {THEME} from "../theme/theme";
import {BackButton} from "../ui/BackButton";
import {AppTitle} from "../ui/AppTitle";
import {EditIcon} from "../ui/icons/EditIcon";
import {TaskList} from "../components/MainScreen/TaskList";
import {Task} from "../components/Task";
import {AppSwitch} from "../ui/AppSwitch";

export const ProfileScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <StatusBar style='light'/>
            <View style={styles.backColor}>
                <View style={styles.header}>
                    <BackButton navigation={navigation} />
                    <AppTitle text='Profile' style={styles.title} />
                </View>
            </View>
            <View style={styles.avatarWrap}>
                <View style={styles.imgWrap}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={styles.editWrap}>
                            <EditIcon />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.userName}>Albert Tino</Text>
                <Text style={styles.userProf}>UI/UX Designer</Text>
            </View>
            <View style={styles.tasksContainer}>
                <View style={styles.textAndLinkWrap}>
                    <View style={styles.textWrap}>
                        <Text style={styles.mainText}>You have total </Text>
                        <Text style={styles.subText}>6 task</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.linkText}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Task lineColor={THEME.label1_dark} navigation={navigation}/>
                <Task lineColor={THEME.label3_dark} navigation={navigation}/>
                <Task lineColor={THEME.label2_dark} navigation={navigation}/>
            </ScrollView>
            <View style={styles.buttonsGroup}>
                <AppSwitch type='reminders' />
                <AppSwitch type='notification' />
                <AppSwitch type='help' />
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
        marginTop: 42,
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        marginLeft: '24.08%'
    },
    backColor: {
        backgroundColor: THEME.componentBcg_dark,
        paddingBottom: 100
    },
    avatarWrap: {
        width: '100%',
        alignItems: 'center',
    },
    imgWrap: {
        width: 120,
        height: 120,
        backgroundColor: THEME.ascent1_dark,
        borderRadius: 60,
        borderColor: THEME.ascent2_dark,
        borderWidth: 3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        top: -60
    },
    editWrap: {
        width: 42,
        height: 42,
        borderRadius: 60,
        backgroundColor: THEME.ascent2_dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        fontFamily: 'Rubik-Medium',
        fontWeight: "500",
        fontSize: 28,
        lineHeight: 33,
        color: THEME.textMain_dark,
        top: -44,
    },
    userProf: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: THEME.textSecondary_dark,
        top: -38
    },
    tasksContainer: {
        marginHorizontal: 24,
        marginTop: 4,
        marginBottom: 16
    },
    textAndLinkWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textWrap: {
        flexDirection: 'row'
    },
    mainText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: THEME.textSecondary_dark,
    },
    subText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: THEME.textMinimal_dark,
    },
    linkText: {
        fontFamily: 'Rubik-Regular',
        fontSize: 18,
        lineHeight: 21,
        color: THEME.textSecondary_dark,
    },
    buttonsGroup: {
        marginTop: 32,
        marginHorizontal: 24
    }
})