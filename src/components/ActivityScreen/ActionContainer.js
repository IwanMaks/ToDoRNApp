import React from "react";
import {StyleSheet, View} from 'react-native'
import {ActionCard} from "../../ui/ActionCard";

export const ActionContainer = () => {
    return (
        <View style={styles.actionContainer}>
            <ActionCard userName='Levi Smith' time='13:24' text='add the research.doc file and the https://ryanazhari.github.io link to the Travel Design UI Kits card task.' />
            <ActionCard userName='Albert Tino' time='15:45' text='Add resource.png and images.jpg file to the Travel Design UI Kits card task.'/>
            <ActionCard userName='Tanya Pena' time='10:12' text='Change the status card task of the Unicom Logo from worked on to  be done.'/>
        </View>
    )
}

const styles = StyleSheet.create({
    actionContainer: {
        paddingHorizontal: 24,
    }
})