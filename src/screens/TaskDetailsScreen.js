import React from 'react'
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
import {AppTag} from "../ui/AppTag";


export const TaskDetailsScreen = ({navigation}) => {
    const Wrapper =
        Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <ScrollView style={styles.mainWrapper}>
            <View style={styles.heading}>
                <Wrapper activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.goBack()}>
                    <View style={styles.buttonBack}>
                        <Text style={styles.buttonText}>{"<"}</Text>
                    </View>
                </Wrapper>
                <Text style={styles.heading}>
                    Detail Task
                </Text>
            </View>
            <View style={styles.tagWrapper}>
                <TagIcon style={{marginRight: 13.5}} />
                <ScrollView style={styles.tagsWrapper} horizontal={true}>
                    <AppTag />
                    <AppTag tagName='Development' color={THEME.label2_dark} />
                    <AppTag tagName='Testing' color={THEME.label3_dark} />
                    <AppTag tagName='Vector' color={THEME.label4_dark} />
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
                    <Text style={styles.deadlineHeading}>Deadline </Text>
                    <Text style={styles.deadlineDate}>November the 6th</Text>
                </View>
                <View style={styles.timeline}>
                    <Text style={styles.deadlineHeading}>We have </Text>
                    <Text style={styles.deadlineDate}>14 days</Text>
                </View>
            </View>
            <View style={styles.teamWrap}>
                <Text style={styles.heading}>Our team</Text>
                <View style={styles.team}>
                    <View style={{...styles.human, ...styles.odd}} />
                    <View style={{...styles.human, ...styles.even}} />
                    <View style={{...styles.human, ...styles.odd}} />
                    <View style={{...styles.human, ...styles.even}} />
                    <Text style={styles.morePeople}>+4</Text>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    mainWrapper: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        backgroundColor: THEME.base_dark
    }
})