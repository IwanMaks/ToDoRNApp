import React, {useEffect} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {TaskList} from "../components/MainScreen/TaskList";
import {Tags} from "../components/MainScreen/Tags";
import {TaskInfo} from "../components/MainScreen/TaskInfo";
import {TaskSearchAndInfo} from "../components/MainScreen/TaskSearchAndAdd";
import {Header} from "../components/MainScreen/Header";
import {useDispatch, useSelector} from "react-redux";
import {loadTasks, loadUser} from "../store/actions/tasks";

// TODO: Передавать в Header нынешнюю дату и фото пользователя
// TODO: Передавать в TaskInfo информацию до статусах задач пользователя
// TODO: Передавать в Tags информацию о всех тегах
// TODO: Передавать в TaskList информацию о всех заданиях

export const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTasks())
        dispatch(loadUser())
    }, [dispatch])

    const allTasks = useSelector(state => state.tasks.tasks)
    const userInfo = useSelector(state => state.tasks.user)

    return (
        <ScrollView style={styles.mainContainer}>
            <Header navigation={navigation} />
            <TaskSearchAndInfo navigation={navigation} />
            <TaskInfo />
            <Tags style={{paddingHorizontal: 24, marginBottom: 42}} />
            <TaskList navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: THEME.base_dark,
    },
})