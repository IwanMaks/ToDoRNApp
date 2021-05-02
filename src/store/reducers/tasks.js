import {LOAD_TASKS, LOAD_USER} from "../types";

const initialState = {
    user: {},
    tasks: [],
    loadingUser: true,
    loadingTasks: true
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loadingTasks: false
            }
        case LOAD_USER:
            return {
                ...state,
                user: action.payload,
                loadingUser: false
            }
        default: return state
    }
}