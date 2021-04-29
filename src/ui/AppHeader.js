import React from "react";
import {StyleSheet, View} from 'react-native'
import {BackButton} from "./BackButton";
import {AppTitle} from "./AppTitle";

export const AppHeader = ({navigation, headerText, styleWrap = {}}) => {
    return (
        <View style={styleWrap}>
            <View style={{...styles.header, ...styleWrap}}>
                <BackButton navigation={navigation} style={styles.icon} />
                <AppTitle text={headerText} style={styles.headerTitle}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginVertical: 42,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 0
    },
    headerTitle: {
    }
})