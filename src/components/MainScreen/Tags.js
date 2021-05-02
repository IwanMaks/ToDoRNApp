import React from "react";
import {View, StyleSheet, FlatList} from "react-native";
import {THEME} from "../../theme/theme";
import {TagIcon} from "../../ui/icons/TagIcon";
import {AppTag} from "../../ui/AppTag";
import {AppTitle} from "../../ui/AppTitle";
import {useSelector} from "react-redux";

export const Tags = ({title = true, textTitle = 'Tag Task', style = {}}) => {
    const user = useSelector(state => state.tasks.user)
    return (
        <View style={{...styles.tags, ...style}}>
            {title ? <AppTitle text={textTitle} style={{marginBottom: 24}} /> : null}
            <View style={styles.tagsContainer}>
                <TagIcon style={{marginRight: 13.5}} />
                <View style={styles.tagsWrapper}>
                    <FlatList
                        data={user.tags}
                        renderItem={({item}) => <AppTag color={item.color} tagName={item.title} />}
                        keyExtractor={tag => tag.id.toString()}
                        horizontal={true}
                    />
                </View>
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