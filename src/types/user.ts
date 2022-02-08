export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS"
}

export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface userAction {
    type: string
    payload?: any
}


export type UserAction = FetchUsersAction