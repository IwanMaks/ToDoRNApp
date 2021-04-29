import {LOAD_TASKS, LOAD_USER} from "../types";

const initialState = {
    user: {},
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case LOAD_USER:
            return {
                ...state,
                user: action.payload
            }
        default: return state
    }
}