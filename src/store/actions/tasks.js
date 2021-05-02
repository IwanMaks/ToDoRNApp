import {LOAD_TASKS, LOAD_USER} from "../types";
import {Http} from "../../http";

export const loadTasks = () => {
    return async dispatch => {

        const tasks = await Http.getTasks('https://rn-todo-app-9ba5e-default-rtdb.firebaseio.com/tasks.json')

        dispatch({
            type: LOAD_TASKS,
            payload: tasks
        })
    }
}

export const loadUser = () => {
    return async dispatch => {

        const user = await Http.getTasks('https://rn-todo-app-9ba5e-default-rtdb.firebaseio.com/user.json')

        dispatch({
            type: LOAD_USER,
            payload: user
        })
    }
}

export const updateSettings = (title, value) => {
    return async dispatch => {
        try {
            await Http.patch(`https://rn-todo-app-9ba5e-default-rtdb.firebaseio.com/user/settings.json`, {
                [title]: !value
            })
        } catch (e) {
            console.log(e)
        }
    }
}