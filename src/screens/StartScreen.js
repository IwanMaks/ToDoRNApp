import React from 'react'
import {View, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Text, Image, Platform} from 'react-native'
import {THEME} from "../theme/theme";
import {StatusBar} from "expo-status-bar";

export const StartScreen = ({navigation}) => {
    const Wrapper =
        Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <View style={styles.container}>
            <StatusBar style='dark'/>
            <View style={styles.banner}>
                <Image source={require('../../assets/bannerImg.png')} style={styles.bannerImg} />
                <View style={styles.bannerBcg}/>
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.heading}>
                    Organize every job for better productivity
                </Text>
                <Text style={styles.description}>
                    We make every work for you and your team easy to manage
                    with cool features and interactive interface
                </Text>
                <Wrapper activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.navigate('Main')}>
                    <View style={styles.buttonStart}>
                        <Text style={styles.buttonText}>Get started</Text>
                    </View>
                </Wrapper>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: THEME.base_dark
    },
    banner: {
        width: "100%",
        height: "60%",
        alignItems: "center"
    },
    bannerImg: {
        width: "100%",
        height: "100%",
        zIndex: 100,
        position: "absolute",
        top: 10,
        resizeMode: "cover"
    },
    bannerBcg: {
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundColor: THEME.ascent2_dark,
        borderBottomRightRadius: 120
    },
    contentWrapper: {
        paddingTop: "8%",
        paddingBottom: "8%",
        paddingLeft: "6%",
        paddingRight: "6%",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%"
    },
    heading: {
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31,
        paddingBottom: "5%"
    },
    description: {
        color: THEME.textSecondary_dark,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Rubik-Regular',
        paddingBottom: "12%"
    },
    buttonWrapper: {
        flexDirection: "column",
        width: "100%",
        height: 72
    },
    buttonStart: {
        borderRadius: 16,
        height: 72,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.ascent2_dark
    },
    buttonText: {
        fontFamily: 'Rubik-Medium',
        color: "#fff",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 31,
    }
})