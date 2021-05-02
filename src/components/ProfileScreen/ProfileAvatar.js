import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import {EditIcon} from "../../ui/icons/EditIcon";
import {THEME} from "../../theme/theme";
import {useSelector} from "react-redux";

export const ProfileAvatar = () => {
    const user = useSelector(state => state.tasks.user);

    return (
        <View style={styles.avatarWrap}>
            <Image source = {{ uri: user.photo }} style={styles.imgWrap}/>
            <TouchableOpacity activeOpacity={0.8} style={styles.edit}>
                <View style={styles.editWrap}>
                    <EditIcon />
                </View>
            </TouchableOpacity>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userProf}>{user.post}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarWrap: {
        width: '100%',
        alignItems: 'center',
    },
    imgWrap: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: THEME.ascent2_dark,
        borderWidth: 3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        top: -60
    },
    edit: {
        top: -103,
        left: 40
    },
    editWrap: {
        width: 42,
        height: 42,
        borderRadius: 60,
        backgroundColor: THEME.ascent2_dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        fontFamily: 'Rubik-Medium',
        fontWeight: "500",
        fontSize: 28,
        lineHeight: 33,
        color: THEME.textMain_dark,
        top: -44,
    },
    userProf: {
        fontFamily: 'Rubik-Regular',
        fontSize: 16,
        lineHeight: 19,
        color: THEME.textSecondary_dark,
        top: -38
    },
})