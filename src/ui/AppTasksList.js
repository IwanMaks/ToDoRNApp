import React from "react";
import {View, StyleSheet, FlatList} from 'react-native'
import {Task} from "../components/MainScreen/Task";
import {THEME} from "../theme/theme";
import {useSelector} from "react-redux";
import {AppTag} from "./AppTag";

export const AppTasksList = ({navigation}) => {
    const tasks = useSelector(state => state.tasks.tasks);

    return (
        <View style={styles.tasks}>
            <FlatList
                data={tasks}
                renderItem={({item}) => (<Task lineColor={item.tags[0].color}
                                               navigation={navigation}
                                               tagTitle={item.tags[0].title}
                                               taskTitle={item.title}
                                               taskDescription={item.description}/>)}
                keyExtractor={task => task.id.toString()}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tasks: {
        flexDirection: 'row'
    }
})