import React from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {THEME} from "../../theme/theme";
import {TagIcon} from "../../ui/icons/TagIcon";
import {AppTag} from "../../ui/AppTag";
import {AppTitle} from "../../ui/AppTitle";

export const Tags = ({title = true, textTitle = 'Tag Task', style = {}}) => {
    return (
        <View style={{...styles.tags, ...style}}>
            {title ? <AppTitle text={textTitle} style={{marginBottom: 24}} /> : null}
            <View style={styles.tagsContainer}>
                <TagIcon style={{marginRight: 13.5}} />
                <ScrollView style={styles.tagsWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AppTag />
                    <AppTag tagName='Development' color={THEME.label2_dark} />
                    <AppTag tagName='Testing' color={THEME.label3_dark} />
                    <AppTag tagName='Vector' color={THEME.label4_dark} />
                    <AppTag tagName='Vector' color={THEME.label4_dark} />
                    <AppTag tagName='Vector' color={THEME.label4_dark} />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tags: {
        width: '100%',
        flexDirection: 'column',
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