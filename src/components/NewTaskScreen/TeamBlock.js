import React from "react";
import {StyleSheet, View} from 'react-native'
import {AddHeader} from "./AddHeader";

export const TeamBlock = (props) => {
    return (
        <View style={styles.teamBlock}>
            <AddHeader buttonTitle='New Member' headerTitle='Select Team' />
            <View style={styles.teamWrap}>
                <View style={{...styles.human, ...styles.odd}} />
                <View style={{...styles.human, ...styles.even}} />
                <View style={{...styles.human, ...styles.odd}} />
                <View style={{...styles.human, ...styles.even}} />
                <View style={{...styles.human, ...styles.odd}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teamBlock: {
        flexDirection: "column",
        width: "100%",
        paddingBottom: "8%",
        paddingHorizontal: 24
    },
    teamWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
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
})