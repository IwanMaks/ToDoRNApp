import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {tasksReducer} from './reducers/tasks'

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))