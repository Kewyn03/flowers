import {combineReducers,configureStore} from "@reduxjs/toolkit";
import flowersReducer from './reducers/flowersSlice'
import counterReducer from "./reducers/counterSlice";

const rootReducer = combineReducers( {
    flowersReducer,
    counterReducer

})

export const store = configureStore({
        reducer: rootReducer
    })

export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch