import React from "react";
import {StyleSheet, View} from 'react-native'
import {AppHeader} from "../../ui/AppHeader";
import {THEME} from "../../theme/theme";

export const ProfileHeader = ({navigation}) => {
    return (
        <View style={styles.backColor}>
            <AppHeader navigation={navigation} headerText='Profile' styleWrap={{paddingHorizontal: 24}} />
        </View>
    )
}

const styles = StyleSheet.create({

    backColor: {
        backgroundColor: THEME.componentBcg_dark,
        paddingBottom: 100
    },
})