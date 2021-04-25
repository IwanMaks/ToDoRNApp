import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    Text,
    Image,
    Platform,
    ScrollView
} from 'react-native'
import {THEME} from "../theme/theme";
import {TagIcon} from "../ui/icons/TagIcon";
import {BeltIcon} from "../ui/icons/BeltIcon";
import {AppTag} from "../ui/AppTag";
import Checkbox from 'expo-checkbox';
import {ClockIcon} from "../ui/icons/ClockIcon";
import {DoneIcon} from "../ui/icons/DoneIcon";
import {EditIcon} from "../ui/icons/EditIcon";


export const TaskDetailsScreen = ({navigation}) => {
    const [ isChecked, setChecked ] = useState(false);
    const Wrapper =
        Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

    const f = '<'

    return (
        <View style={{flex: 1, backgroundColor: "transparent", zIndex: 0}}>
            <ScrollView style={styles.mainWrapper}>
                <View style={styles.header}>
                    <Text style={styles.heading}>
                        Detail Task
                    </Text>
                </View>
                <View style={styles.tagWrapper}>
                    <TagIcon style={{marginRight: 13.5}} />
                    <ScrollView style={styles.tagsWrapper} horizontal={true}>
                        <AppTag />
                    </ScrollView>
                </View>
                <View style={styles.description}>
                    <Text style={styles.mainText}>Travel UI Design Kits</Text>
                    <Text style={styles.secondaryText}>
                        Make ui designs for travel needs with the following goals
                        listed below, and in a layout style that matches the research data
                        and design inspiration that has been collected.
                    </Text>
                </View>
                <View style={styles.timelineWrap}>
                    <View style={styles.deadlineWrap}>
                        <BeltIcon style={styles.beltIcon}/>
                        <Text style={styles.deadlineHeading}>Deadline: </Text>
                        <Text style={styles.deadlineDate}>November the 6th</Text>
                    </View>
                    <View style={styles.timeline}>
                        <Text style={styles.deadlineHeading}>We have </Text>
                        <Text style={styles.deadlineDate}>14 days</Text>
                    </View>
                    <View style={styles.timelineBar}>
                        <View style={styles.progress}>
                            <View style={styles.progressActive}/>
                        </View>
                    </View>
                </View>
                <View style={styles.teamBlock}>
                    <Text style={styles.heading}>Our team</Text>
                    <View style={styles.teamWrap}>
                        <View style={{...styles.human, ...styles.odd}} />
                        <View style={{...styles.human, ...styles.even}} />
                        <View style={{...styles.human, ...styles.odd}} />
                        <View style={{...styles.human, ...styles.even}} />
                        <View style={{...styles.human, ...styles.odd}} />
                        <Text style={styles.morePeople}>+4</Text>
                    </View>
                </View>
                <View style={styles.goalsWrap}>
                    <Text style={styles.heading}>Task goals</Text>
                    <View style={styles.goals}>
                        <View style={styles.goal}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? THEME.ascent2_dark : undefined}
                            />
                            <Text style={styles.goalText}>Digitize a sketch made on paper</Text>
                        </View>
                        <View style={styles.hr}/>
                        <View style={styles.goal}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? THEME.ascent2_dark : undefined}
                            />
                            <Text style={styles.goalText}>Digitize a sketch made on paper</Text>
                        </View>
                        <View style={styles.hr}/>
                        <View style={styles.goal}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? THEME.ascent2_dark : undefined}
                            />
                            <Text style={styles.goalText}>Digitize a sketch made on paper</Text>
                        </View>
                        <View style={styles.hr}/>
                        <View style={styles.goal}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? THEME.ascent2_dark : undefined}
                            />
                            <Text style={styles.goalText}>Digitize a sketch made on paper</Text>
                        </View>
                        <View style={styles.hr}/>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomButtonsWrap}>
                <Wrapper activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.navigate('Main')}>
                    <View style={{...styles.button, ...styles.buttonLeft}}>
                        <ClockIcon/>
                        <Text style={styles.buttonText}>Pending</Text>
                    </View>
                </Wrapper>
                <Wrapper activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.navigate('Main')}>
                    <View style={{...styles.button, ...styles.buttonCentral}}>
                        <DoneIcon/>
                        <Text style={styles.buttonText}>Done</Text>
                    </View>
                </Wrapper>
                <Wrapper activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.navigate('Main')}>
                    <View style={{...styles.button, ...styles.buttonRight}}>
                        <EditIcon/>
                        <Text style={styles.buttonText}>Edit</Text>
                    </View>
                </Wrapper>
            </View>
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
        paddingTop: "12%",
        paddingHorizontal: "5%",
        zIndex: 2
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10%"
    },
    heading: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    tagWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "8%"
    },
    mainText: {
        fontFamily: "Rubik-Medium",
        fontSize: 28,
        lineHeight: 33,
        color: THEME.textMain_dark,
        paddingBottom: "3%"
    },
    secondaryText: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        lineHeight: 24,
        color: THEME.textSecondary_dark,
        paddingBottom: "10%"
    },
    timelineWrap: {
        flexDirection: "column",
        width: "100%"
    },
    deadlineWrap: {
        flexDirection: "row",
        alignItems: "center"
    },
    deadlineHeading: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        lineHeight: 24,
        color: THEME.textSecondary_dark,
        paddingBottom: "3%"
    },
    deadlineDate: {
        fontFamily: "Rubik-Medium",
        fontSize: 14,
        lineHeight: 24,
        color: THEME.textMinimal_dark,
        paddingBottom: "3%"
    },
    timeline: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "2%"
    },
    beltIcon: {
        top: -5,
        marginRight: "2%"
    },
    timelineBar: {
        flexDirection: "row",
        width: "100%",
        height: 12,
        top: -3,
        marginBottom: "8%"
    },
    progress: {
        height: "100%",
        width: "100%",
        borderRadius: 6,
        backgroundColor: THEME.componentBcg_dark,
    },
    progressActive: {
        height: "100%",
        width: "60%",
        borderRadius: 6,
        backgroundColor: THEME.ascent2_dark
    },
    teamBlock: {
        flexDirection: "column",
        width: "100%",
        paddingBottom: "8%",
    },
    teamWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        paddingTop: "6%",
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
    morePeople: {
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 18,
        lineHeight: 32,
        marginLeft: 32
    },
    goalsWrap: {
        flexDirection: "column",
        width: "100%",
        paddingBottom: "25%",
    },
    goals: {
        paddingTop: "6%",
        alignItems: "flex-end"
    },
    goal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: "3%",
        width: "100%"
    },
    hr: {
        height: 2,
        width: "88%",
        backgroundColor: THEME.textMinimal_dark,
        borderRadius: 2
    },
    goalText: {
        width: "88%",
        fontFamily: "Rubik-Regular",
        fontSize: 16,
        lineHeight: 32,
        color: THEME.textSecondary_dark,
    },
    bottomButtonsWrap: {
        width: "100%",
        backgroundColor: "transparent",
        bottom: 0,
        flexDirection: "row",
        height: "10%",
        zIndex: 3,
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        paddingHorizontal: "5%"
    },
    button: {
        width: "30%",
        height: "65%",
        backgroundColor: THEME.ascent2_dark,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "2%",
        paddingHorizontal: "3%",
    },
    buttonText: {
        marginLeft: "6%",
        fontFamily: "Rubik-Medium",
        fontSize: 14,
        lineHeight: 19,
        color: "#fff"
    },
    buttonLeft: {
        backgroundColor: THEME.ascent4_dark
    },
    buttonCentral: {
        backgroundColor: THEME.ascent1_dark
    },
    buttonRight: {
        backgroundColor: THEME.ascent2_dark
    }
})