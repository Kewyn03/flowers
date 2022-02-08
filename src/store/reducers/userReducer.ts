import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS :
            return {loading: true,error: null,users: []}
        default :
            return state
    }
}