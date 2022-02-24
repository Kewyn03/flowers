import {combineReducers,configureStore} from "@reduxjs/toolkit";
import flowersReducer from './reducers/userSlice'

const rootReducer = combineReducers( {
    flowersReducer
})

export const store = configureStore({
        reducer: rootReducer
    })

export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch