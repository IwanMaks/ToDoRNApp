import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native'
import {ClockIcon} from "../../ui/icons/ClockIcon";
import {DoneIcon} from "../../ui/icons/DoneIcon";
import {EditIcon} from "../../ui/icons/EditIcon";
import {THEME} from "../../theme/theme";

export const BottomButtonsWrap = ({navigation}) => {
    const Wrapper =
        Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
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
    )
}

const styles = StyleSheet.create({
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