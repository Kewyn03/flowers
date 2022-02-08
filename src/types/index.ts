import {combineReducers} from "redux";
import {userReducer} from "../store/reducers/userReducer";

export const rootReducer = combineReducers({
    user : userReducer
})