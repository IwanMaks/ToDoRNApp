import React from "react";
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {AppInput} from "../../ui/AppInput";
import {FilterIcon} from "../../ui/icons/FilterIcon";

export const SearchContainer = () => {
    return (
        <View style={styles.searchContainer}>
            <AppInput placeholder='Find Schedule...' />
            <TouchableOpacity activeOpacity={0.7}>
                <FilterIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32,
        paddingHorizontal: 24
    },
})