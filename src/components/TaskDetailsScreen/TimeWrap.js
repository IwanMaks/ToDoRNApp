import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {BeltIcon} from "../../ui/icons/BeltIcon";
import {THEME} from "../../theme/theme";

export const TimeWrap = () => {
    return (
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
    )
}

const styles = StyleSheet.create({
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
})