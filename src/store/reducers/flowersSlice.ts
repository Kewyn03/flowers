import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IFlower} from "../../models/IFlower";

interface FlowersState {
    flowers: IFlower | null
    loading: boolean
    error: any
}

const initialState: FlowersState = {
    flowers: null,
    loading: false,
    error: null
}


export const fetchFlowers = createAsyncThunk<IFlower>(
    'flowers/fetchFlowers',
    async  (data,{rejectWithValue}) => {
        try {
            const res = await fetch('/data/flowers.json')

            if (!res.ok) {
                new Error('Server error!')
            }
            const data: IFlower = await res.json()
            return data

        } catch (error : any) {
            return rejectWithValue(error.message)
        }


    }
)
const flowersSlice = createSlice({
    name: 'flowers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchFlowers.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.loading = true
            state.error = null
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchFlowers.fulfilled,
            (state, { payload }) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.flowers = payload
                state.loading = false


            });

        // When a server responses with an error:
        builder.addCase(fetchFlowers.rejected,
            (state) => {
                // We show the error message
                // and change `status` back to `idle` again.
              state.error = 'huy'
            });
    },




})

export const {} = flowersSlice.actions
export default flowersSlice.reducer