import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {AddHeader} from "./AddHeader";
import {THEME} from "../../theme/theme";

export const GoalsWrap = () => {
    return (
        <View style={styles.goalsBlock}>
            <AddHeader buttonTitle='New Goal' headerTitle='Goals Task' style={{marginBottom: 0}} />
            <View>
                <View>
                    <Text style={styles.goalTitle}>Digitize a sketch made on paper</Text>
                    <View style={styles.hr} />
                </View>
                <View>
                    <Text style={styles.goalTitle}>Digitize a sketch made on paper</Text>
                    <View style={styles.hr} />
                </View>
                <View>
                    <Text style={styles.goalTitle}>Digitize a sketch made on paper</Text>
                    <View style={styles.hr} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    goalsBlock: {
        paddingHorizontal: 24,
        marginBottom: 32
    },
    goalTitle: {
        fontFamily: 'Rubik-Regular',
        color: THEME.textSecondary_dark,
        fontSize: 16,
        lineHeight: 19,
        paddingVertical: 20
    },
    hr: {
        height: 2,
        width: "100%",
        backgroundColor: THEME.textMinimal_dark,
        borderRadius: 2
    },
})