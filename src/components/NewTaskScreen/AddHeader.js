import React from "react";
import {StyleSheet, View} from 'react-native'
import {AppTitle} from "../../ui/AppTitle";
import {AddButton} from "./AddButton";

export const AddHeader = ({headerTitle, buttonTitle, style = {}}) => {
    return (
        <View style={{...styles.headerWrap, ...style}}>
            <AppTitle text={headerTitle} />
            <AddButton buttonTitle={buttonTitle}  />
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 19
    },
})