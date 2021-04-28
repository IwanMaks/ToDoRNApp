import React from "react";
import {StyleSheet, View} from 'react-native'
import {Tags} from "../MainScreen/Tags";
import {THEME} from "../../theme/theme";
import {AddHeader} from "./AddHeader";

export const TagsWrap = (props) => {
    return (
        <View style={styles.tags}>
            <AddHeader headerTitle='Choose Tag' buttonTitle='New Tag' />
            <View style={styles.tagsContainer}>
                <Tags title={false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tags: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'column',
        marginBottom: 42
    },
    tagsTitle: {
        marginBottom: 24,
        fontFamily: 'Rubik-Medium',
        color: THEME.textMain_dark,
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 31
    },
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tagsWrapper: {
        flexDirection: 'row',
    },
})