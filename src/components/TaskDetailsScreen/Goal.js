import React, {useState} from "react";
import {StyleSheet, View, Text} from 'react-native'
import Checkbox from "expo-checkbox";
import {THEME} from "../../theme/theme";

export const Goal = () => {
    const [ isChecked, setChecked ] = useState(false);
    return (
        <>
        <View style={styles.goal}>
            <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? THEME.ascent2_dark : undefined}
            />
            <Text style={styles.goalText}>Digitize a sketch made on paper</Text>
        </View>
        <View style={styles.hr}/>
        </>
    )
}

const styles = StyleSheet.create({
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
})